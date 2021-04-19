<?php

namespace App\Http\Controllers;

use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    /**
     * /members
     * GET
     */
    public function list()
    {
        $members = Member::all();
        // we send the response in JSON with the HTTP code : 200
        return $this->sendJSONResponse(
            $members,
            200
        );
    }
}
