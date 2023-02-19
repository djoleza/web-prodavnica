<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProizvodResource;
use App\Models\Proizvod;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProizvodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ProizvodResource::collection(Proizvod::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'naziv' => 'required|string',
                'opis' => 'required|string|max:100',
                'cena' => 'required|integer',
                'kategorija_id'=>'required|integer|exists:kategorijas,id',
                'brend_id'=>'required|integer|exists:brends,id',
                'stanje_na_lageru' => 'required|integer',
                'slika_url' => 'required|string',
                 
            ]
        );
    
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
    
        $proizvod = Proizvod::create([
            'naziv' => $request->naziv,
            'opis' => $request->opis,
            'cena' => $request->cena,
            'kategorija_id' => $request->kategorija_id,
            'brend_id' => $request->brend_id,
            'stanje_na_lageru' => $request->stanje_na_lageru,
            'slika_url' => $request->slika_url,
 

        ]);
    
        return response()->json(['message' => 'Proizvod uspešno kreiran.', 'proizvod' => $proizvod,'status'=>200]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ProizvodResource(Proizvod::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function edit(Proizvod $proizvod)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'naziv' => 'required|string',
                'opis' => 'required|string|max:100',
                'cena' => 'required|integer',
                'kategorija_id'=>'required|integer|exists:kategorijas,id',
                'brend_id'=>'required|integer|exists:brends,id',
                'stanje_na_lageru' => 'required|integer',
                'slika_url' => 'required|string',
                 
            ]
        );
    
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $proizvod = Proizvod::find($id);

        if ($proizvod) {
            $proizvod->naziv = $request->naziv;
            $proizvod->opis = $request->opis;
            $proizvod->cena = $request->cena;
            $proizvod->slika_url = $request->slika_url;
            $proizvod->kategorija_id = $request->kategorija_id;
            $proizvod->brend_id = $request->brend_id;
            $proizvod->stanje_na_lageru = $request->stanje_na_lageru;
    
            $proizvod->save();
    
            return response()->json(['Uspesno izmenjen proizvod!', $proizvod]);
        } else {
            return response()->json('Trazeni objekat ne postoji u bazi');
        }
    }
  
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Proizvod  $proizvod
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        $d = Proizvod::find($id);
        if($d){
            $d->delete();
            return response()->json(['Uspesno obrisano!', $d]);
        
        }
           
       return response()->json('Trazeni objekat ne postoji u bazi');
    }
}
