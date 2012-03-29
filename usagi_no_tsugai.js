var month = 0;
var fill_month = 12;
var pair = 1;
var naw_pair = pair;
var f = function(x,y)
{ return x + y; };
while(++month <= fill_month)
{
  naw_pair = f(pair,naw_pair); 
  pair = naw_pair - pair;
  console.log(month + "ヶ月目 兎のペア数:" + pair);
};

/*
  var month = 0;
  var number_of_pairs = 1;
  var before_number_of_pairs = 0;

  while(month <= 12)
  {
    var b = number_of_pairs;
    number_of_pairs
      = number_of_pairs + before_number_of_pairs;
    before_of_pairs = b;
    month = month + 1;
    console.log("month:" + month);
    console.log("number:" + number_of_pairs);
    console.log("before:" + before_number_of_pairs);
    console.log("");
  }
*/
