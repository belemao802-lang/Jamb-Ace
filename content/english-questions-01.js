/* JAMB ACE English Language question pack 1/4: 100 original UTME-style practice items.
   These are NOT represented as official historical JAMB questions. */
(function(){
  var out=[];
  function add(topic,rows){
    rows.forEach(function(x,i){
      var pos=i%4, wrong=[x[2],x[3],x[4]],opts=[],k=0;
      for(var j=0;j<4;j++)opts.push(j===pos?x[1]:wrong[k++]);
      out.push(["English Language",topic,(i%5===4?"d":i%3===0?"e":"m"),[x[0],opts,pos,x[5]||("The correct answer is "+x[1]+".") ]]);
    });
  }
  add("Lexis: Synonyms",[
["Choose the word nearest in meaning to 'abundant'.","plentiful","scarce","fragile","distant","Abundant means existing in large quantities; plentiful is the closest synonym."],
["Choose the word nearest in meaning to 'candid'.","frank","secretive","careless","hostile","Candid means honest and direct; frank has a similar meaning."],
["Choose the word nearest in meaning to 'diligent'.","hard-working","careless","impatient","ordinary","Diligent describes someone who works carefully and persistently."],
["Choose the word nearest in meaning to 'obsolete'.","outdated","modern","useful","famous","Obsolete means no longer in use or out of date."],
["Choose the word nearest in meaning to 'reluctant'.","unwilling","eager","certain","grateful","Reluctant means hesitant or unwilling."],
["Choose the word nearest in meaning to 'mitigate'.","lessen","increase","expose","ignore","To mitigate is to make something less severe."],
["Choose the word nearest in meaning to 'benevolent'.","kind","cruel","greedy","timid","Benevolent means well-meaning and kind."],
["Choose the word nearest in meaning to 'concise'.","brief","lengthy","unclear","emotional","Concise means expressing much in few words."],
["Choose the word nearest in meaning to 'arduous'.","difficult","pleasant","simple","brief","Arduous means requiring great effort."],
["Choose the word nearest in meaning to 'impartial'.","unbiased","unfair","uncertain","unfriendly","Impartial means not favouring either side."],
["Choose the word nearest in meaning to 'vivid'.","clear and lively","dull","hidden","incorrect","Vivid means strikingly clear or lively."],
["Choose the word nearest in meaning to 'conspicuous'.","noticeable","invisible","ordinary","distant","Conspicuous means easy to see or notice."],
["Choose the word nearest in meaning to 'frugal'.","economical","wasteful","lavish","careless","Frugal means careful about spending or using resources."],
["Choose the word nearest in meaning to 'plausible'.","believable","impossible","irrelevant","unusual","Plausible means seeming reasonable or likely to be true."],
["Choose the word nearest in meaning to 'hostile'.","unfriendly","welcoming","peaceful","helpful","Hostile means unfriendly or antagonistic."],
["Choose the word nearest in meaning to 'meticulous'.","very careful","very noisy","easily bored","quick to anger","Meticulous means showing great attention to detail."],
["Choose the word nearest in meaning to 'profound'.","deep","shallow","temporary","trivial","Profound can mean deep or intellectually significant."],
["Choose the word nearest in meaning to 'resilient'.","able to recover","easily broken","unwilling to move","easily confused","Resilient means able to recover quickly after difficulty."],
["Choose the word nearest in meaning to 'ambiguous'.","unclear","obvious","accurate","complete","Ambiguous means open to more than one interpretation."],
["Choose the word nearest in meaning to 'commend'.","praise","punish","question","dismiss","To commend someone is to express approval or praise."]
  ]);
  add("Lexis: Antonyms",[
["Choose the word opposite in meaning to 'scarce'.","abundant","rare","limited","meagre"],
["Choose the word opposite in meaning to 'expand'.","contract","enlarge","extend","increase"],
["Choose the word opposite in meaning to 'transparent'.","opaque","clear","obvious","glassy"],
["Choose the word opposite in meaning to 'optimistic'.","pessimistic","hopeful","confident","cheerful"],
["Choose the word opposite in meaning to 'temporary'.","permanent","brief","passing","short-lived"],
["Choose the word opposite in meaning to 'humble'.","arrogant","modest","respectful","simple"],
["Choose the word opposite in meaning to 'dormant'.","active","sleeping","inactive","quiet"],
["Choose the word opposite in meaning to 'generous'.","stingy","charitable","giving","kind"],
["Choose the word opposite in meaning to 'rigid'.","flexible","stiff","strict","firm"],
["Choose the word opposite in meaning to 'ancient'.","modern","old","historic","primitive"],
["Choose the word opposite in meaning to 'innocent'.","guilty","blameless","pure","harmless"],
["Choose the word opposite in meaning to 'scarcity'.","plenty","shortage","lack","deficiency"],
["Choose the word opposite in meaning to 'conceal'.","reveal","hide","cover","mask"],
["Choose the word opposite in meaning to 'inferior'.","superior","lower","lesser","weaker"],
["Choose the word opposite in meaning to 'reluctant'.","willing","hesitant","unready","unwilling"],
["Choose the word opposite in meaning to 'frequent'.","rare","regular","common","repeated"],
["Choose the word opposite in meaning to 'artificial'.","natural","synthetic","false","manufactured"],
["Choose the word opposite in meaning to 'hostile'.","friendly","aggressive","unpleasant","antagonistic"],
["Choose the word opposite in meaning to 'compulsory'.","optional","required","mandatory","binding"],
["Choose the word opposite in meaning to 'deliberate' (intentional).","accidental","planned","purposeful","intentional"]
  ]);
  add("Idioms and expressions",[
["'To spill the beans' means to…","reveal a secret","cook a meal","waste food","make a promise"],
["'Once in a blue moon' means…","very rarely","every night","at dawn","without warning"],
["'To hit the nail on the head' means to…","be exactly right","cause an accident","work as a carpenter","miss a target"],
["'To add fuel to the fire' means to…","make a bad situation worse","put out a fire","solve a dispute","start cooking"],
["'To turn over a new leaf' means to…","change one's behaviour for the better","read a different book","move house","forget a friend"],
["'To bite off more than one can chew' means to…","take on too much","eat quickly","refuse food","share a meal"],
["'To be in hot water' means to be…","in trouble","taking a bath","very thirsty","feeling warm"],
["'To beat about the bush' means to…","avoid the main point","work in a garden","speak clearly","finish quickly"],
["'To keep an eye on' someone means to…","watch carefully","ignore completely","criticise loudly","follow secretly"],
["'To cost an arm and a leg' means to be…","very expensive","free of charge","dangerous to use","easy to find"],
["'To break the ice' means to…","make people feel more comfortable","damage frozen water","end a friendship","stop a meeting"],
["'To let the cat out of the bag' means to…","reveal a secret accidentally","release a pet","buy something expensive","make a loud noise"],
["'To pull someone's leg' means to…","joke with or tease someone","help someone walk","cause an injury","ask for assistance"],
["'To burn the midnight oil' means to…","work or study late at night","waste electricity","sleep early","light a cooking fire"],
["'To have a change of heart' means to…","change one's opinion or feeling","become ill","travel abroad","lose one's memory"],
["'To be on cloud nine' means to be…","extremely happy","very confused","deeply worried","physically tired"],
["'To face the music' means to…","accept the consequences","perform on stage","listen carefully","avoid punishment"],
["'To go the extra mile' means to…","make more effort than expected","travel a long distance","arrive late","take a shortcut"],
["'To sit on the fence' means to…","avoid choosing a side","rest outdoors","build a fence","support both teams openly"],
["'To get cold feet' means to…","become nervous and hesitate","feel cold weather","run very fast","lose a shoe"]
  ]);
  add("Phrasal verbs",[
["In 'The meeting was called off', 'called off' means…","cancelled","announced","postponed briefly","attended"],
["In 'She looks after her younger brother', 'looks after' means…","takes care of","searches for","looks behind","criticises"],
["In 'The plane took off at noon', 'took off' means…","left the ground","removed clothing","became popular","stopped suddenly"],
["In 'He gave up smoking', 'gave up' means…","stopped","distributed","postponed","continued"],
["In 'Please put out the candle', 'put out' means…","extinguish","display","produce","place outside"],
["In 'The students carried on working', 'carried on' means…","continued","transported","complained","finished"],
["In 'I ran into an old friend', 'ran into' means…","met unexpectedly","collided violently","ran away from","visited formally"],
["In 'The workers set up a committee', 'set up' means…","established","destroyed","delayed","criticised"],
["In 'We need to find out the truth', 'find out' means…","discover","invent","hide","forget"],
["In 'The car broke down', 'broke down' means…","stopped functioning","was demolished","accelerated","was sold"],
["In 'They turned down the offer', 'turned down' means…","rejected","accepted","repeated","examined"],
["In 'The teacher pointed out the error', 'pointed out' means…","drew attention to","erased","created","ignored"],
["In 'He came across an old photograph', 'came across' means…","found by chance","walked across","borrowed","photographed"],
["In 'The fire broke out at night', 'broke out' means…","started suddenly","was extinguished","was reported","spread slowly"],
["In 'Please fill in this form', 'fill in' means…","complete","empty","tear up","sign away"],
["In 'She put off the appointment', 'put off' means…","postponed","cancelled forever","attended","arranged"],
["In 'He brought up an important issue', 'brought up' means…","raised for discussion","carried upstairs","settled permanently","forgot"],
["In 'The suspect gave himself up', 'gave himself up' means…","surrendered","escaped","complained","hid"],
["In 'They looked into the complaint', 'looked into' means…","investigated","ignored","published","repeated"],
["In 'The team carried out the experiment', 'carried out' means…","performed","cancelled","copied","criticised"]
  ]);
  add("Grammar: Concord",[
["Neither the principal nor the teachers ___ available.","are","is","was","has been"],
["Each of the candidates ___ a number.","has","have","are having","were having"],
["The news ___ encouraging.","is","are","were","have been"],
["Mathematics ___ my favourite subject.","is","are","were","have"],
["A pair of shoes ___ under the bed.","is","are","were","have"],
["The committee ___ submitted its report.","has","have","are","were"],
["The quality of the mangoes ___ poor.","is","are","were","have"],
["Either the boys or their sister ___ responsible.","is","are","were","have"],
["Ten kilometres ___ a long distance to walk.","is","are","were","have"],
["The police ___ investigating the case.","are","is","was","has"],
["One of my friends ___ in Kano.","lives","live","are living","have lived"],
["The teacher, together with her pupils, ___ arrived.","has","have","are","were"],
["There ___ several reasons for the delay.","are","is","was","has"],
["Neither of the answers ___ correct.","is","are","were","have"],
["The furniture in these rooms ___ new.","is","are","were","have"],
["A number of students ___ absent today.","are","is","was","has"],
["The number of applicants ___ increasing.","is","are","were","have"],
["Bread and butter ___ all he asked for.","was","were","are","have been"],
["If I ___ you, I would apologise.","were","was","am","be"],
["The scissors ___ on the table.","are","is","was","has"]
  ]);
  window.JAMB_EXTRA_QUESTIONS=(window.JAMB_EXTRA_QUESTIONS||[]).concat(out);
  window.JAMB_BANK_META={subject:"English Language",batch:1,batchCount:4,count:out.length,type:"original UTME-style practice",officialPastQuestions:0};
})();