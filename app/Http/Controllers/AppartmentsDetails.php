<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AppartmentsDetails extends BaseController
{
    public function getSearchedProperties(Request $request){
    	$offset = $request->input('offset');
    	$result = DB::select("select property_id,description,property_name,price,advance,location,created_on,fk_area_id,sharing,no_of_likes from tbl_properties_details limit 5 offset ".$offset);
    	$data = array();
    	$i=0;
    	if($result){
	    	foreach ($result as $row) {
	    		$i++;
	    		array_push($data,array(
	    			"name" => $row->property_name,
	              	"rent" => $row->price,
	              	"id" => $row->property_id,
	              	"advance" => $row->advance,
	              	"location" => $row->location,
	              	"sharing" => $row->sharing,
	              	"img" => "http://localhost/only/public/img/pg".$i.".jpg",
	              	"views" => $row->no_of_likes,
	              	"comments" => 0,
	              	"postDate" => $row->created_on,
	              	"description" => $row->description
              	));
	    		if($i%3==0){
	    			$i=0;
	    		}
	    	}
	    	$res = array("status"=>1,"data"=>$data,"offset"=>$offset);
	    }else{
	    	$res = array("status"=>0);
	    }
	    return $res;
    }
}
