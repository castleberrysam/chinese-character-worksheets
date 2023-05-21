/*
*	returns Pinyin for passed character string.
*	String character = the character(s) you wanna get the image to
*	Function callback(result) = function that will be called after getPinyin is done
*/
function getPinyin(character, callback){
	function getCharPinyin(character){
		if(Object.hasOwn(pinyin_data, character)) {
			return pinyin_data[character].split(",")[0];
		}
		return "???"
	}
	callback(character.split("").map((elt,idx,arr) => getCharPinyin(elt)).join(" "));
}
