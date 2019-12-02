 function onNoteOn()
{
	const var veloNote = Message.getVelocity();
	Console.print("veloNote is " + veloNote);
	
	const var notePlayed = Message.getNoteNumber();
	
	
	
	const var timeNoteOn = Engine.getUptime();
	Console.print("timeNoteOn is " + timeNoteOn);
	
	
	
	if (veloNote > 50){
	Synth.addNoteOn(1, notePlayed+12, veloNote, 0);
	Synth.addNoteOff(1, notePlayed+12, 14000);
	}
	
	
	
}
 function onNoteOff()
{
	
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
 