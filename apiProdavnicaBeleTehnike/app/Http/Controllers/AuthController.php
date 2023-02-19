<?php

namespace App\Http\Controllers;

 
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|string|max:100|email|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    
        $token = $user->createToken('auth_token')->plainTextToken;
    
        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }


    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['success'=>false]);
        }

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['poruka' => 'Pogresan email ili password!']);
        }

        $user = User::where('email', $request['email'])->firstOrFail();


        if(!$user){
            return response()->json([
                'status'=>401,
                'message'=>'Invalid credentials',
            ]);
        }else{
            if($user->admin==1){
                $role='admin';
                $token = $user->createToken($user->email.'_AdminToken',['server:admin'])->plainTextToken;
            }else{
                $role=' ';
                $token = $user->createToken($user->email.'_Token',[''])->plainTextToken;
            }
        } 
        $response = [
            'status'=>200,
            'username'=>$user->name,
            'token' => $token,
            'role'=> $role,
            'id'=>$user->id
        ];

        return response()->json([$response,'success'=>true ]);
    }


    public function logout()
    {
        if (auth()->check()) {
            $user = auth()->user();
            $user->currentAccessToken()->delete();
            return response()->json(['message' => 'Successfully logged out']);
        } else {
            return response()->json(['message' => 'Not logged in'], 401);
        }
    }
}
