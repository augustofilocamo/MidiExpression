Content.makeFrontInterface(400,200);

const var AHDSREnvelope2 = Synth.getModulator("AHDSR Envelope2");function onNoteOn()
{
	
    
	//Console.print(Engine.getUptime());
	
	const var noteOnTime = Engine.getUptime();
	const var Release = Content.getComponent("Release");	
	

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
 