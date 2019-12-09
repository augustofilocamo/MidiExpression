Content.makeFrontInterface(400,200);

const var AHDSREnvelope2 = Synth.getModulator("AHDSR Envelope2");function onNoteOn()
{
	
    
	//Console.print(Engine.getUptime());
	
	const var noteOnTime = Engine.getUptime();
	const var Release = Content.getComponent("Release");	
	const var Attack = Content.getComponent("Attack");	
	const var Velo = Message.getVelocity();
	

}function onNoteOff()
{
	const var noteOffTime = Engine.getUptime();
	const var difTime = noteOnTime - noteOffTime;
	Console.print(difTime);
	
    if (noteOnTime - noteOffTime > -0.2) {

        Release.setValue(34);
        Release.changed();
      

	} else {
    
        Release.setValue(12400);
        Release.changed();  
      
    }
    
    
    if (noteOnTime - noteOffTime > -1.2 && Velo > 64) {


        Attack.setValue(4);
        Attack.changed();        

	} else {
    

        Attack.setValue(3000);
        Attack.changed();           
    }
     
 
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 