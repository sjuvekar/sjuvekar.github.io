<?php 

 require_once('../php/Cache/Lite.php');
 require_once('../php/Net/Curl.php');
		
	// Define and initialize the cache
	$options = array(
    		'cacheDir' => '/tmp/',
    		'lifeTime' => 604800
	);
	
	$Cache_Lite = new Cache_Lite($options);

	// Compute url from GET parameters
 	$search_url = array(
 		"jobs" => "http://www.glassdoor.com/GD/Job/jobs.htm?sc.keyword=",
 		"companies" => "http://www.glassdoor.com/GD/Reviews/company-reviews.htm?sc.keyword=",
 		"salaries" => "http://www.glassdoor.com/GD/Salaries/company-salaries.htm?sc.keyword=",
 		"interviews" => "http://www.glassdoor.com/GD/Interview/job-interview-questions.htm?sc.keyword="
 	);
 	$url = "";
 	$content = "";
 	if (isset($_GET['url'])) {
 		$url = "http://" . $_GET['url'];
 	}
 	else if(isset($_GET['type']) && isset($_GET['company'])) {
 		$type = $_GET['type'];
 		$company = strtolower($_GET['company']);
 		$url = $search_url[$type];
 		$url = $url . $company;
 		if (isset($_GET['locId']) && isset($_GET['locT'])) {
 			$locId = $_GET['locId'];
 			$locT = $_GET['locT'];
 			$url = $url . "&locId=" . $locId . "&locT=" . $locT;
 		}
 		if (isset($_GET['title'])) {
 			$title = $_GET['title'];
 			$url = $url . "&sc.jobTitle=" . $title;
 		}
 	}
 	
 	// Query cache
 	if ($content = $Cache_Lite->get($url)) {
 		error_log("Cache hit: " . $url);
 	}
 	else {
 		$curl = new Net_Curl($url);
		$content = $curl->execute();
	  	$Cache_Lite->save($content, $url);
 	}
 	
 	// Write JSON output
 	$final_json = array(
 		"contents" => $content
 	);
 	$result = json_encode($final_json, JSON_HEX_TAG);
 	
 	if(isset($_GET['callback'])){
 		header('Content-Type: text/json; charset=utf8');
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Max-Age: 3628800');
		header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

		$callback = $_GET['callback'];
		echo $callback.'('.$result.');';

	}
	else{
    		// normal JSON string
		header('Content-Type: application/json; charset=utf8');
		echo $result;
	}	
?>