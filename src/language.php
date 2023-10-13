<?php

$language = getLanguage();

include_once "language/" . $language . ".php";

function getLanguage()
{
    $language = "nl";

    $domain = $_SERVER['HTTP_HOST'];
    $domain = trim($domain);

    if (stristr($domain, ".com")) {
        $language = "en";
    }

    return $language;
}

function text($str)
{
    global $text;
    // check if $text exist before returning
    if (isset($text[$str])) {
        return $text[$str];
    }
    return '##############################################';
}
