// 1 - exemplo decorators

 function myDecorator(){
  console.log("Iniciando Decorator!");

  return function ( target: any, propertKey: string, description: PropertyDescriptor){

    console.log("Executando decorator");
    console.log(target);
    console.log(propertKey);
    console.log(description);
  }
 }

 class myClass{
  @myDecorator()

  testing(){
    console.log("Terminando execuçãp do método");
  }

 }

 const myObject = new myClass();

 myObject.testing();