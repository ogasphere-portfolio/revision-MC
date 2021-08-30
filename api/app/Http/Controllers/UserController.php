<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function show()
    {
        return User::with('accounts')->get();
    }
    public function create(Request $request)
    {
        dd($request->all());

        //$newUser = User::findOrFail($id);
        //$newUser->accounts()->attach($accountsID);
    }
}
