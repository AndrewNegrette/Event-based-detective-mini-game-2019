// AP Computer Science Project 2019 Soledad High //

playSound("25.-Main-Theme-(Redux).mp3", false);
onEvent("startGame", "click", function(event) {
  playSound("assets/Police_Scanner-ScanMan-1157209815.mp3", false);
  console.log("startGame clicked!");
  setScreen("mainMenu");
});
var mainP ; //
  var locat1 ;//

    

onEvent("creditsButton", "click", function(event) {
playSound("assets/Police_Scanner-ScanMan-1157209815.mp3", false);
  setScreen("creditsScreen")
});
onEvent("creditsBack", "click", function(event) {
  playSound("assets/Police_Scanner-ScanMan-1157209815.mp3", false);
  console.log("creditsBack clicked!");
  setScreen("mainMenu")
});

onEvent("playlistButton", "click", function(event) {
playSound("assets/Police_Scanner-ScanMan-1157209815.mp3", false);
  setScreen("playlist")
});

onEvent("painfulMemories","click",function(event) {
stopSound("25.-Main-Theme-(Redux).mp3");
stopSound("assets/1-09.-Analysing.mp3");
stopSound("assets/2-01.-Not-Just-a-Machine.mp3");
stopSound("assets/02.-New-Beginning--Pt.-1.mp3");
stopSound("assets/20.-Use-and-Abuse--Pt.-4.mp3");
playSound("assets/07-Painful-Memories.mp3", true);


});

onEvent("Analysing","click",function(event) {
stopSound("25.-Main-Theme-(Redux).mp3");
stopSound("assets/07-Painful-Memories.mp3");
stopSound("assets/2-01.-Not-Just-a-Machine.mp3");
stopSound("assets/02.-New-Beginning--Pt.-1.mp3");
stopSound("assets/20.-Use-and-Abuse--Pt.-4.mp3");
playSound("assets/1-09.-Analysing.mp3", true);


});


onEvent("notjustaMachine","click",function(event) {
stopSound("25.-Main-Theme-(Redux).mp3");
stopSound("assets/1-09.-Analysing.mp3");
stopSound("assets/07-Painful-Memories.mp3");
stopSound("assets/02.-New-Beginning--Pt.-1.mp3");
stopSound("assets/20.-Use-and-Abuse--Pt.-4.mp3");
playSound("assets/2-01.-Not-Just-a-Machine.mp3", true);


});


onEvent("newBeginning","click",function(event) {
stopSound("25.-Main-Theme-(Redux).mp3");
stopSound("assets/1-09.-Analysing.mp3");
stopSound("assets/2-01.-Not-Just-a-Machine.mp3");
stopSound("assets/07-Painful-Memories.mp3");
stopSound("assets/20.-Use-and-Abuse--Pt.-4.mp3");
playSound("assets/02.-New-Beginning--Pt.-1.mp3", true);


});


onEvent("useandAbuse","click",function(event) {
stopSound("25.-Main-Theme-(Redux).mp3");
stopSound("assets/1-09.-Analysing.mp3");
stopSound("assets/2-01.-Not-Just-a-Machine.mp3");
stopSound("assets/07-Painful-Memories.mp3");
stopSound("assets/02.-New-Beginning--Pt.-1.mp3");
playSound("assets/20.-Use-and-Abuse--Pt.-4.mp3", true);


});


onEvent("playlistBack", "click", function(event) {
  playSound("assets/Police_Scanner-ScanMan-1157209815.mp3", false);
  console.log("creditsBack clicked!");
  setScreen("mainMenu")
});






onEvent("quitMainmenu", "click", function(event) {
  playSound("assets/Police_Scanner-ScanMan-1157209815.mp3", false);
  console.log("quitMainmenu clicked!");
  setScreen("startMenu")
});



onEvent("startMission", "click", function(event) {
  playSound("assets/Police_Scanner-ScanMan-1157209815.mp3", false);
  console.log("startMission clicked!");
  setScreen("selectorMission");
  //reset values//
if (count > 5) { count
     = 0 ;
    
  }
  if (clue > 0) { clue
     = 0 ;
    
  }
  
});

 


onEvent("selectorBack", "click", function(event) {
  playSound("assets/Police_Scanner-ScanMan-1157209815.mp3", false);
  console.log("selectorBack clicked!");
  setScreen("mainMenu");
});
onEvent("DecInfo", "click", function(event) {
  playSound("assets/Police_Scanner-ScanMan-1157209815.mp3", false);
  console.log("DecInfo clicked!");
  setScreen("DetectiveInfo");
  var message = " The goal of the detective is to find the Serial Killers whereabouts and to catch him in 3 days. Each choice you make influences the outcome of the game. Most choices you make effect your Karma and clue points.";
setText("text_Dec",message);
  
});

onEvent("nextSelector", "click", function(event) {
  playSound("assets/Police_Scanner-ScanMan-1157209815.mp3", false);
  console.log("nextSelector clicked!");
  setScreen("choiceScreen");
});
onEvent("decInfoback", "click", function(event) {
  playSound("assets/Police_Scanner-ScanMan-1157209815.mp3", false);
  console.log("decInfoback clicked!");
  setScreen("choiceScreen");
});



onEvent("detectiveStart", "click", function(event) {
  playSound("assets/Woop-Woop-SoundBible.com-198943467.mp3", false);
  playSound("assets/Police_Scanner_Chatter-PoliceScan-1248924387.mp3",false);
  console.log("detectiveStart clicked!");
  setScreen("detectiveIntro");
//
//
  mainP = getText("inputName");
  locat1 = getText("inputLocation"); 
  
var message = " Prologue: While on patrol in "+locat1+" you respond to a home invasion and find a young man who, by the looks of it, beat both the homeowners to death with a bat. You show him your badge and yell "+locat1+" PD! Hands where I can see them! He drops the bat but doesn't put his hands up. You see a bulge which looks like the outline of a handgun. His right hand nervously veering towards it. What will you do ? ";
  setText("decIntrotext1",message);
});
var clue =0 ;
var count=0 ;
//0.1//
onEvent("0.1","click",function(){count = count -50;
playSound("assets/Glock-17-9mm-SoundBible.com-149518286.mp3", false);
  setText("DisplayKamra", count)});
 onEvent("0.1", "click", function(event) {
  console.log("0.1 clicked!");
  var message= "After firing 11 shots at him with your Glock you stopped firing and after searching his body found no weapon of any kind in his pockets. You discovered that the bulge in his pocket was his wallet. Afterwards you get a call to return back to the station for a new briefing. ";
  setText("text_area0.1",message);
  setScreen("screen0.1");
    setText("Kam0.1", count) ;
}); 

//0.2//  
  onEvent("0.2","click",function(){count = count +50;
  
  setText("DisplayKamra", count)});
  var message ="The young man complied with your order and the arrest was swift and fast. Afterwards you get a call to return back to the station for a new briefing."
  setText("text_area0.2",message);
  onEvent("0.2", "click", function(event) {
  console.log("0.2 clicked!");
  setScreen("screen0.2");
  setText("Kam0.2",count);
});
  //0.3//
onEvent("0.3", "click", function(event) {
  console.log("0.3 clicked!");
  var message ="You call him a coward and to rot in hell. He throws the bat at you and runs to a bedroom. You follow him there and he shoots you with a shotgun injuring you severely. He then runs away and you bleed to death before emergency services arrive.";
  setText("text_area0.3",message);
  setScreen("deathScreenIntro");

});
onEvent("deathscreenBack", "click", function(event) {
  
  console.log("deathscreenBack clicked!");
  setScreen("mainMenu");
});




onEvent("bre0.1", "click", function(event) {
  
  console.log("bre0.1 clicked!");
  var message ="After cleaning up the blood you walk into the building you already know what is going on. The Police Chief confirms that you did discover a serial killer. He then asks you to give a profile of him. Your Profile of him: He’s killed 3 women in the last month, all in there late 20s early 30s, light skinned brunettes with different socioeconomic status but located in the same part of town. We believe this killer is a white male, late 40s early 50s , fit enough to dominate them but old enough to pass by their radar. He has a good paying job and knowledge in counter forensics as we’ve not been able to obtain any traces of his DNA. Once he is aware we are on to him we’ll have 72 hours or 3 days to catch him before he leaves.";
  setText("text_areaBre",message);
  setScreen("screenBre");
  setText("KamBre",count);
});
onEvent("bre0.2", "click", function(event) {
  
  console.log("bre0.2 clicked!");
  var message = "Afterwards you walk into the building you already know what is going on. The Police Chief confirms that you did discover a serial killer. He then asks you to give a profile of him. Your Profile of him: He’s killed 3 women in the last month, all in there late 20s early 30s, light skinned brunettes with different socioeconomic status but located in the same part of town. We believe this killer is a white male, late 40s early 50s , fit enough to dominate them but old enough to pass by their radar. He has a good paying job and knowledge in counter forensics as we’ve not been able to obtain any traces of his DNA. Once he is aware we are on to him we’ll have 72 hours or 3 days to catch him before he leaves.";
  setText("text_areaBre",message);
  setScreen("screenBre");
  setText("KamBre",count);
});


onEvent("Buttonday1", "click", function(event) {
  
  console.log("Buttonday1 clicked!");
  setScreen("screen1.0");
  setText("Kam1.0",count);
  var message = "Day 1 : You sit in your office as detective in charge of catching this serial killer. You think of holding a press conference to inform the people of "+locat1+" that there is a killer on the loose to make it harder for him to kill. You could also go to the first crime scene to find something you might have missed.Or set up a geographical profile to possibly narrow down where he lives. What will you choose to spend your time doing ?";
  setText("textarea1.0",message);
 
//algorithim//1.1,1.2,1.3//
onEvent("1.1","click",function(){clue = clue +1;
  setText("clue1.1", clue)});
  setText("Kam1.1",count);
  
  onEvent("1.2","click",function(){clue = clue +1;
  setText("clue1.2", clue)});
  setText("Kam1.2",count);
  
  onEvent("1.3","click",function(){clue = clue +0 ;
  setText("clue1.3", clue)});
  setText("Kam1.3",count);
  
  onEvent("1.3","click",function(){count = count +25 ;
  setText("clue1.3", clue)});
  setText("Kam1.3",count);
  
  
  //1.1//
onEvent("1.1", "click", function(event) {
  
  console.log("1.1 clicked!");
  setScreen("screen1.1");
  var message ="You visit the first crime scene and discover more overkill than with the other two victims meaning this first kill was personal or at least more personally in some way. Although you’ve found nothing that can directly help, you know that this women worked in real-estate and maybe one of her customers was the killer. "; 
  setText("text_area1.1",message);
onEvent("buttonday2", "click", function(event) {
  
  console.log("buttonday2 clicked!");
  setScreen("screen2.0");
  setText("Kam2.0",count);
  setText("clue2.0",clue);
  var message = "After reviewing all her previous customers you compiled a list of men that somewhat meet the criteria of the killer but you’ll need more information too narrow this down. As you’re working a co-worker calls you and informs you there’s been a new murder and it looks like it’s the same guy.";
  setText("text_areaDay2",message);
});  
});
});
 
//1.2//
onEvent("1.2", "click", function(event) {
  
  console.log("1.2 clicked!");
  setScreen("screen1.2");
  setText("Kam2.0",count);
  setText("clue2.0",clue);
  var message ="You construct a geographical profile basing off of the locations of where the murders took place and determine he lives on the south side of "+locat1+ ".";
  setText("text_area1.2",message);

onEvent("day2.0", "click", function(event) {
  
  console.log("day2.0 clicked!");
  setScreen("screen2.0");
  setText("Kam2.0",count);
  setText("clue2.0",clue);
  var message ="After narrowing down the location of the killer you receive a call of a new murder and it seems to be the same killer. You should go to the new crime scene." ;
  setText("text_areaDay2",message);
});
});

//1.3//
onEvent("1.3", "click", function(event) {
  
  console.log("1.3 clicked!");
  setScreen("screen1.3");
  setText("Kam2.0",count);
  setText("clue2.0",clue);
var message = "You hold a press conference in downtown "+locat1+ " and alert the public to what’s going on. Although this will put less people at risk you aren’t any step closer to finding the killer.";
  setText("text_area1.3",message);//scrpit for 1.3//
onEvent("day1.3-2.0", "click", function(event) {
  
  console.log("day1.3-2.0 clicked!");
  setScreen("screen2.0");
  setText("Kam2.0",count);
  setText("clue2.0",clue);
  var message = "After holding a press conference and answering some questions from the public you are called to investigate a new murder scene which is believed to be connected to the other 3. ";
  setText("text_areaDay2",message);
});
});


onEvent("button2.01", "click", function(event) {
  
  console.log("button2.01 clicked!");
  setScreen("screen2.01");
  setText("Kam2.01",count);
  setText("clue2.01",clue);
  var message = "Day 2: You arrive at the newest crime scene which is in a similar location to the other murders. Just like the other victims she was a light skinned brunette with a good job. Apart from the first victim, like all the rest she was killed with a .357 Magnum bullet which appears to be his weapon of choice. Her Family is here and wishes you not to go through her personal belongings as they are sacred to her, though it could help. You could also swept the house for fingerprints to find him or talk to the family to find something about her.";
  setText("text_area2.01",message);
  
  //algorithim for 2.1,2.2,2.3//
  
  onEvent("2.1","click",function(){clue = clue +2;
  setText("clue2.1", clue)});
  setText("Kam2.1",count);
  
  onEvent("2.2","click",function(){clue = clue +0;
  setText("clue2.2", clue)});
  setText("Kam2.2",count);
  onEvent("2.2","click",function(){count = count -25;
  setText("clue2.2", clue)});
  setText("Kam2.2",count);
  
  onEvent("2.3","click",function(){clue = clue +1 ;
  setText("clue2.3", clue)});
  setText("Kam2.3",count);
onEvent("2.3","click",function(){count = count -25 ;
  setText("clue2.3", clue)});
  setText("Kam2.3",count);
  
  //2.1//
  onEvent("2.1", "click", function(event) {
    
    
  console.log("2.1 clicked!");
  setScreen("screen2.1");
  setText("Kam3.0",count);
  setText("clue3.0",clue);
var message = "You ask the family a few questions and if she had seen anyone lately like a stranger or let anyone into the house before and they mention to you about a tech support guy coming in a few days ago to fix her computer. You cross reference his name with a list you compiled with the other victims and find matching name ! You run his name and find his address and you’re ready to capture the killer.";
  setText("text_area2.1",message);//scrpit for 2.1//
onEvent("button2.1-3.0", "click", function(event) {

  console.log("day2.1-3.0 clicked!");
  setScreen("screen3.0");
  setText("Kam3.0",count);
  setText("clue3.0",clue);
  var message = "Now that you know his identity you need to prove that he is the one committing these crimes.";
 setText("text_area3.0",message);
//////secrect Ending//////
if ( clue>=3) { setScreen("screenV1");
  
} else {
  setScreen("screen3.0");
}
///V1///
setText("Kam3.0",count);
  setText("clue3.0",clue);
  var message = " Day 3: You arrive back at the station and you need to think of an approach. You could call a swat team with you but that would decrease the possibility of his capture as well as being stealthy. Going alone is risky but you’d be able to act on him faster without him fleeing "+locat1+ 
 setText("text_areaV1",message);
 ///V1.1//
onEvent("V1.1", "click", function(event) {

  console.log("V1.1 clicked!");
  setScreen("screenV1.1");
  setText("KamV1.1",count);
  setText("clue3.0",clue);
  var message = "You decide to go alone to his house with the hope of catching him off guard. You see his lights are on in his house and see him sitting down watching TV. You have your gun unholstered preparing for the worst but you still want to bring him in alive. You knock on the door and then he opens it…";
 setText("text_areaV1.1",message);
});
//V1.2//
onEvent("V1.2", "click", function(event) {
  
  console.log("V1.2 clicked!");
  setScreen("screenV1.2");
  setText("KamV1.2",count);
  setText("clue3.0",clue);
  var message = "You decide to bring swat with you and surround the killers home. Snipers are watching the windows and a swat team is ready to make the arrest on your order ";
 setText("text_areaV1.2",message);
});
 //V1.111//V1.1111//
  
onEvent("V1.11", "click", function(event) {
  
  if ( count>=25) { setScreen("screenV1.111");
  
  
} else {
  setScreen("screenV1.1111");
}
setText("KamV4.44",count);
  var message = "When he opens the door he looks confused and you pull your gun on him and tell him he’s under arrest for the murders of 4 young women. He turns the other direction and make a run for it so you shoot him in the leg immobilizing him and handcuff him."+mainP+" you have successfully captured the Killer and have made "+locat1+" a safer place. Rating 10/10 ";
  setText("text_areaV1.111",message);
  
var message = "When he opens the door he recognizes you and charges you. You try to bring out your gun but it gets knocked out of your hand when you are knocked to the floor. As you two rumble on the floor he pulls out a knife and quickly slits your throat ending your life instantly. The FBI later finds his identity thanks to your work and captures him in another state. Rating 6/10";
  setText("text_areaV1.1111",message);
 
});
//V1.222//V1.2222//
onEvent("V1.222", "click", function(event) {
  
  if ( count>=25) { setScreen("screenV1.222");
  
  
} else {
  setScreen("screenV1.2222");
}
setText("KamV1.2",count);
  var message = "Swat Team enters the house when suddenly the entire house burst into flames and a massive explosion occurs. Everyone inside the building died including the Killer. Later that day you were fired from "+locat1+" Police Department for bad leadership and the unnecessary death of law enforcement. Rating 5/10"
  setText("text_areaV1.2222",message);
  
var message = "Swat Team enters the house with no resistance and successfully arrests the Killer. "+mainP+"  thanks to your work you stopped him from taking more lives or escaping. You are a hero to "+locat1+" and the people thank you. Rating 9/10";
  setText("text_areaV1.222",message);
});

onEvent("buttonV1.111-End", "click", function(event) {
  
  console.log("buttonV1.111-End clicked!");
  setScreen("mainMenu");
});
onEvent("buttonV1.1111-End", "click", function(event) {

  console.log("buttonV1.1111-End clicked!");
  setScreen("mainMenu");


});
onEvent("buttonV1.222-End", "click", function(event) {
  
  console.log("buttonV1.222-End clicked!");
  setScreen("mainMenu");
});
onEvent("buttonV1.2222-End", "click", function(event) {
  
  console.log("buttonV1.2222-End clicked!");
  setScreen("mainMenu");
 
///////////////////////////

});
});
});
//2.2//
onEvent("2.2", "click", function(event) {
 
  console.log("2.2 clicked!");
  setScreen("screen2.2");
  setText("Kam3.0",count);
  setText("clue3.0",clue);
var message ="You apparently forgot about what he said in the briefing, he is a master at counter forensicts and to no ones surprise he didn’t leave any types of prints at the crime scene.";
  setText("text_area2.2",message);//scrpit for 2.2//
  
onEvent("button2.2-3.0", "click", function(event) {
 
  console.log("day2.2-3.0 clicked!");
  setScreen("screen3.0");
  setText("Kam3.0",count);
  setText("clue3.0",clue);
  
  var message = "Since you got nothing out of the last crime scene there’s still another chance to find his location. There is a tech company that 2/4 victims went to so maybe an employ works there? Or you can look over all the evidence you have currently and maybe find something you didn’t see the first time. You can also contact the FBI for help and their assistance."; 
  setText("text_area3.0",message);
});
});

//2.3//
onEvent("2.3", "click", function(event) {
  
  console.log("2.3 clicked!");
  setScreen("screen2.3");
  setText("Kam3.0",count);
  setText("clue3.0",clue);
var message = "Against her families wishes you go through her private belongings and computer. Apparently she was secretly an escort behind her husbands back and due to that always needed her computer cleaned. Besides her only family the tech guy would also have access to the house and know the layout. You then go back to your office to conclude your next set of actions.";
  setText("text_area2.3",message);//scrpit for 2.3//
  
onEvent("button2.3-3.0", "click", function(event) {
  
  console.log("day2.3-3.0 clicked!");
  setScreen("screen3.0");
  setText("Kam3.0",count);
  setText("clue3.0",clue);
  
  var message = "Knowing this guy might work for this tech company then maybe looking into this company may be a good idea. Though you also have a good amount of evidence already to review and find something you might have missed. The FBI would also be of great help to you as well, if anything they could crack the case for you !";
  setText("text_area3.0",message);
});
});
//3.0//
 //Algorithm//
 onEvent("3.1","click",function(){clue = clue +1;
  setText("Kam3.1",count);
  setText("clue3.1", clue)});//no function
  
  onEvent("3.1","click",function(){count = count -25;
  setText("Kam3.1",count);
  setText("clue3.1", clue)});//no function
  
  onEvent("3.2","click",function(){clue = clue +1;
  setText("clue3.2", clue)});
  setText("Kam3.2",count);

onEvent("3.3","click",function(){clue = clue +0;
  setText("clue3.3", clue)});
  setText("Kam3.3",count);
  
//3.1//
onEvent("3.1", "click", function(event) {
  
  console.log("3.1 clicked!");
  setScreen("screen3.1");
  setText("KamV2",count);
  
var message = "After looking into this tech company you discover that there was an employee that worked with 3/4 of the women. He is also in his late 40s and he was also dating the sister of the first victim killed. You have discovered the identity of the killer.";
  setText("text_area3.1",message);//scrpit for 2.3//
onEvent("button3.1-V2", "click", function(event) {
  
  console.log("button3.1-V2 clicked!");
  setScreen("screenV2");
  setText("KamV2",count);
  
  var message = "After you arrive at his house with a swat team, you realize that the best chance you have at bringing him in is to either confront him unarmed and talk him down or to sneak around back to survey his house before entering to catch him off guard.";
  setText("text_areaV2",message);
});
});

//3.2//
onEvent("3.2", "click", function(event) {
  
  console.log("3.2 clicked!");
  setScreen("screen3.2");
  setText("KamV2",count);
  
var message = "After looking back at all your evidence and clearing your head you find something interesting. You look back at the first victim and discover that she had a sister that used to date a man that works at a tech company a few cites away.";
  setText("text_area3.2",message);//scrpit for 2.3//
  ///result of bad Karma///
   if ( count>=25) { setScreen("screen3.2");
  
} else {
  setScreen("screenFail");
  var message = "After reviewing all the evidence over and over again you scream as you dont make any progress. A few days go by and the killer is never seen again. This case haunts you for the rest of your life as you spiral into depression";
  setText("text_areaFail",message);
}
///////////////////////////
onEvent("button3.2-V2", "click", function(event) {
  
  console.log("button3.2-V2 clicked!");
  setScreen("screenV2");
  setText("KamV2",count);
  
  var message = "After doing some more research you know that this man also worked on the computers with all of the other victims so you can conclude he’s the killer and arrive at his house with a swat team. You realize that the best chance you have at bringing him in is to either confront him unarmed and talk him down or to sneak around back to survey his house before entering to catch him off guard.";
  setText("text_areaV2",message);
  
});
});
//3.3//
onEvent("3.3", "click", function(event) {
  
  console.log("3.3 clicked!");
  setScreen("screen3.3");
  
  
var message = "Unfortunately for you "+mainP+" the FBI is dealing with many cases and it takes time for them to send a team over to you but they eventually do but its too late by then….the killer has already moved on and people are so angry at you they forced you to resign from the Department.";
  setText("text_area3.3",message);//scrpit for 2.3//
onEvent("button3.3-End", "click", function(event) {
  console.log("button3.3-End clicked!");
  setScreen("mainMenu");
  
});
});
//V2//
//nothing needed//

//V2.1//V2.3//
onEvent("V2.1", "click", function(event) {
  
  console.log("V2.1 clicked!");
  setScreen("screenV2.1");
  setText("KamV2.1",count);
  
var message = "After deciding to approach him directly after knocking on the door he quickly makes a run for the back door leading to his backyard and you’re thinking quickly between two options which would either be to chase after him which could be risky or to use lethal force because he may be to dangerous to be left alive.";
  setText("text_areaV2.1",message);//scrpit for 2.3//
onEvent("V3.2", "click", function(event) {
  
  console.log("V3.2 clicked!");
  
    if ( count>=25) { setScreen("screenV3.1");
    var message = "You make the hard decision to shoot to kill while he runs away from you. You fire two shots to the chest and one to the head. Although the people of "+locat1+" are grateful for this the families of the victims will never see justice for his crimes and the Department is also opening up an investigation if lethal force was necessary. Rating 7/10".
  setText("text_areaV3.1",message);
} else {
  setScreen("screenV3.2");
  var message = "You make the hard decision to shoot to kill while he runs away from you. Your first shot misses while the other only grazed his shoulder. He turns around and fires his .357 Revolver at you where a bullet goes straight through your head killing you instantly. He then sets his house to explode and gets away only to be captured decades later by the FBI. Rating 5/10";
  setText("text_areaV3.2",message);
}

  setText("KamV2.1",count);
  
   
  
  
  
  var message = "You chase him through his backyard and he jumps through a few fences until he’s backed against a corner. You aim you gun at him and are now going to attempt to arrest him.";
  setText("text_areaV3.3",message);
  
});
});
//V3.2// Button 
onEvent("buttonV3.3-End", "click", function(event) {
  
  console.log("buttonV3.2-End clicked!");
  setScreen("mainMenu");


});

onEvent("buttonFail", "click", function(event) {
  
  console.log("buttonFail clicked!");
  setScreen("mainMenu");

});
//V3.1// button
onEvent("buttonV3.1-End", "click", function(event) {
  
  console.log("buttonV3.1-End clicked!");
  setScreen("mainMenu");

});

//V3.3//
onEvent("V3.3", "click", function(event) {
  
  console.log("V3.3 clicked!");
  setScreen("screenV3.3");
   setText("KamV3.3",count);
  
var message = "You chase him through his backyard and he jumps through a few fences until he’s backed against a corner. You aim you gun at him and are now going to attempt to arrest him.";
  setText("text_areaV3.3",message);//scrpit for 2.3//
onEvent("V4.1", "click", function(event) {

  if ( count>=25) { setScreen("screenV4.1");
  
} else {
  setScreen("screenV4.2");
}
 
  console.log("V4.1 clicked!");
  setText("KamV4.1",count);
  var message = "After a heated conversation he gives in and he turns himself in accepting his fate in prison for the rest of his life. You are awarded for your heroism and your intelligence. The city of "+locat1+" thanks you. Rating 9/10";
  setText("text_areaV4.1",message);
});
  onEvent("buttonV4.1-End", "click", function(event) {
    
  console.log("buttonV4.1-End clicked!");
  setScreen("mainMenu");
  });
  
setText("KamV4.1",count);
  var message = "After unsuccessfully getting him to give in he pulls his revolver out and kills himself with it. You are awarded for your heroism and your intelligence. The city of "+locat1+" thanks you. Though everynight you always wonder what would’ve happened if he never pulled that trigger. Rating 7/10";
  setText("text_areaV4.2",message);
});
  onEvent("buttonV4.2-End","click",function(event){
    
  setScreen("mainMenu");

});


//V2.2//V2.22
onEvent("V2.2", "click", function(event) {
  
  console.log("V2.2 clicked!");
  setScreen("screenV2.2");
  setText("KamV2.2",count);
var message = "After deciding to sneak to the back of his house you have two options to servey him. You can peak the the doors eyelet or peak through the window. Both should provide good insight on how to arrest him and breach the place.";
  setText("text_areaV2.2",message);
  
onEvent("V2.22", "click", function(event) {
  
  
  if ( count>=25) { setScreen("screenV2.222");
  
  
} else {
  setScreen("screenV2.22");
}
setText("KamV4.44",count);
  var message = "You then peak through then doors eyelet and see him on the other side and you have no time to react and he shoots you in the stomach twice. He tries to escape but a Swat sniper managed to eliminate him. You were in critical condition but managed to survive. You are awarded for your heroism and your intelligence. The city of "+locat1+" thanks you. Rating 7/10";
  setText("text_areaV2.222",message);//was v4.22 for some resaosn?//
  var message = "You then peak through the doors eyelet and see him right on the other side and you had no time to react and he shoots you through the door and runs away never to be seen again. Rating 4/10";
  setText("text_areaV2.22",message);

 
});
onEvent("buttonV2.222-End", "click", function(event) {
  
  console.log("buttonV2.222-End clicked!");
  setScreen("mainMenu");
});
onEvent("buttonV2.22-End", "click", function(event) {
  
  console.log("buttonV2.22-End clicked!");
  setScreen("mainMenu");
});

//V3.333
onEvent("V3.33", "click", function(event) {

  console.log("V3.33 clicked!");
  setScreen("screenV3.33");
  setText("KamV3.33",count);

var message = "After peaking the window he is alerted to your presence and runs out through a side window out the bathroom! You then decide to chase after him!";
  setText("text_areaV3.33",message);//scrpit for 2.3//
onEvent("V4.444/V4.44", "click", function(event) {
  
  
  if ( count>=25) { setScreen("screenV4.444");
  
  
} else {
  setScreen("screenV4.44");
}
 
  
  setText("KamV4.44",count);
  var message = "As you chase him through the neighborhood he breaks inside a house and you start to hear screaming and gunshots inside. By the time you manage to break in its too late as 3 bodies lay next to the killer, one of them a child. As he’s laughing he throws his revolver to the floor and surrenders. The City is horrified of the events that took place and the guilt that you experience for the rest of your life is near unbearable. Rating 6/10 ";
  setText("text_areaV4.44",message);
  
  setText("KamV4.444",count);
  var message = "As you chase him he breaks into a home and you hear gunshots inside. As sprint as fast as you can to get there you see a man holding an assault rifle saying ”detective…I got em”. You two were both acknowledged for your heroism and bravery. Rating 8/10 ";
  setText("text_areaV4.444",message);
  
  var message = mainP + " catches killer. ";
  setText("labelV4.444",message);
});
onEvent("buttonV4.444-End", "click", function(event) {
  console.log("buttonV4.444-End clicked!");
setScreen("mainMenu");
}); 
onEvent("buttonV4.44-End", "click", function(event) {
  console.log("buttonV4.44-End clicked!");
setScreen("mainMenu");
});
});
});

});