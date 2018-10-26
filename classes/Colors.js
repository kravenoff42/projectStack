function Colors(){
	this.back = color(43,48,58);
	this.prime = color(2,128,144);
	this.dark = color(15,24,39);
	this.second = color(103,60,79);
	this.third = color(127,85,125);
	this.trim = color(119,156,171);
	this.text = color(255,255,255);
  
}
Colors.prototype.rand = function(){
  switch(random(['prime','dark','trim','second'])){
    case 'back':
      return this.back;
    case 'prime':
      return this.prime;
    case 'dark':
      return this.dark;
    case 'trim':
      return this.trim;
    case 'text':
      return this.text;
    case 'second':
      return this.second;
  }
}
  