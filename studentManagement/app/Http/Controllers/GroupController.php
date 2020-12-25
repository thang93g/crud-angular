<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $students = DB::table('students')->where('group_id', '=', $id)->get();
        $array = [
            'group' => $group,
            'students' => $students,
        ];
        return response()->json($array);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        $group = Group::find($id);
        $group->fill($request->all());
        $group->save();
        return response()->json($group);
    }


    public function destroy($id)
    {
        Student::where('group_id', '=', $id)->delete();
        $group = Group::find($id);
        $group->delete();
    }

    public function search($keyword)
    {
        $group = Group::where('name', 'LIKE', '%' . $keyword . '%')->get();
        return response()->json($group);
    }
}
