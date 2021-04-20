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

    /**
     * /members
     * POST
     */
    public function create(Request $request)
    {
        return $this->save($request);
    }

    /**
     * /members
     * POST
     */
    private function save(Request $request)
    {

        $memberName = $request->input('name');

        $member = new Member();
        $member->name = $memberName;

        $member->updated_at = null;

        $member->save();

        return $this->sendJSONResponse(
            $member,
            201
        );
    }
}
