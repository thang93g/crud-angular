<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;

class GroupController extends Controller
{

    public function index()
    {
        $groups = Group::all();
        return response()->json($groups);
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $group = new Group();
        $group->fill($request->all());
        $group->save();
        return response()->json($group);
    }


    public function show($id)
    {
        $group = Group::find($id);
        return response()->json($group);
    }


    public function edit( $id)
    {
        //
    }


    public function update(Request $request,$id)
    {
        $group = Group::find($id);
        $group->fill($request->all());
        $group->save();
        return response()->json($group);
    }


    public function destroy($id)
    {
        $group = Group::find($id);
        $group->delete();
    }

    public function search(Request $request)
    {
        $groups = Group::where('name','LIKE','%'.$request->keyword.'%')->get();
        return response()->json($groups);
    }
}
