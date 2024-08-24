<?php

namespace App\Http\Controllers;

use App\Models\Airbnb;
use Illuminate\Http\Request;

class AirbnbController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Airbnb::select('id', 'title', 'where', 'price')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'where' => 'required',
            'price' => 'required'
        ]);

        Airbnb::create($request->post());
        return response()->json([
            'message' => 'Nova reserva adicionada com sucesso!'
        ]);
    }


    public function show(Airbnb $airbnb)
    {
        return response()->json([
            'airbnb' => $airbnb
        ]);
    }


    public function update(Request $request, Airbnb $airbnb)
    {
        $request->validate([
            'title' => 'required',
            'where' => 'required',
            'price' => 'required'
        ]);
        $airbnb->fill($request->post())->update();
        return response()->json([
            'message' => 'Reserva atualizada com sucesso!'
        ]);
    }


    public function destroy(Airbnb $airbnb)
    {
        $airbnb->delete();
        return response()->json([
            'message' => 'Reserva deletada com sucesso!'
        ]);
    }
}
