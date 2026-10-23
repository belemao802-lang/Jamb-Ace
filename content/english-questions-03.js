/* JAMB ACE English Language question pack 3/4: 100 original UTME-style practice items. */
(function(){
 var out=[];
 function explain(topic, answer) {
   if (topic.indexOf("Lexis: Synonyms")===0) return "The correct answer is "+answer+" because it has the closest meaning to the target word in this context.";
   if (topic.indexOf("Lexis: Antonyms")===0) return "The correct answer is "+answer+" because it expresses the opposite meaning of the target word.";
   if (topic.indexOf("Idioms")===0) return "The correct answer is "+answer+" because it gives the conventional meaning of the whole expression, not a literal reading.";
   if (topic.indexOf("Phrasal verbs")===0) return "The correct answer is "+answer+" because this verb-particle combination has that meaning in the sentence.";
   if (topic.indexOf("Grammar: Concord")===0) return "The correct answer is "+answer+" because the verb must agree with the sentence's main subject.";
   if (topic.indexOf("Grammar: Tenses")===0) return "The correct answer is "+answer+" because the time marker and order of events require that tense or aspect.";
   if (topic.indexOf("Grammar: Prepositions")===0) return "The correct answer is "+answer+" because it is the standard preposition used with this word or phrase.";
   if (topic.indexOf("Grammar: Word forms")===0) return "The correct answer is "+answer+" because that word form fits the grammar and meaning of the sentence.";
   if (topic.indexOf("Sentence completion")===0) return "The correct answer is "+answer+" because it completes the clause pattern correctly and preserves the intended meaning.";
   if (topic.indexOf("Spelling")===0) return "The correct answer is "+answer+"; the other choices contain spelling errors.";
   if (topic.indexOf("Registers")===0) return "The correct answer is "+answer+" because it is the appropriate term for the field named in the question.";
   if (topic.indexOf("Oral English")===0) return "The correct answer is "+answer+" because it matches the target sound, syllable stress or rhyme; compare pronunciation rather than spelling.";
   if (topic.indexOf("Cloze")===0) return "The correct answer is "+answer+" because it fits both the grammar and the meaning of the sentence.";
   if (topic.indexOf("Sentence interpretation")===0) return "The correct answer is "+answer+" because it expresses the intended meaning of the phrase in context.";
   if (topic.indexOf("Punctuation")===0) return "The correct answer is "+answer+" because the punctuation marks the sentence structure correctly.";
   if (topic.indexOf("Comprehension")===0) return "The correct answer is "+answer+" because it is supported by the information or clues in the scenario.";
   if (topic.indexOf("Summary")===0) return "The correct answer is "+answer+" because effective summary keeps essential meaning and removes irrelevant detail.";
   return "The correct answer is "+answer+" because it best fits the context, meaning and grammatical structure.";
 }
 function add(topic,rows){rows.forEach(function(x,i){var p=i%4,w=[x[2],x[3],x[4]],o=[],k=0;for(var j=0;j<4;j++)o.push(j===p?x[1]:w[k++]);out.push(["English Language",topic,(i%5===4?"d":i%3===0?"e":"m"),[x[0],o,p,x[5]||explain(topic,x[1])]]);});}
 add("Registers and specialised vocabulary",[
["In banking, money paid into an account is a…","deposit","sentence","verdict","harvest"],
["In law, a person formally accused of an offence is a…","defendant","patient","tenant","referee"],
["A doctor who specialises in children's health is a…","paediatrician","geologist","surveyor","architect"],
["In agriculture, the deliberate supply of water to crops is…","irrigation","pollination","migration","erosion"],
["In aviation, the person who commands an aircraft is the…","pilot","conductor","shipwright","referee"],
["In journalism, the heading of a news story is the…","headline","footnote","appendix","verdict"],
["In football, a player who guards the goal is the…","goalkeeper","striker","linesman","coach"],
["In printing, a mistake in printed text is a…","typographical error","diagnosis","penalty","equation"],
["A group of singers performing together is a…","choir","jury","crew","flock"],
["In commerce, a reduction from the marked price is a…","discount","dividend","tariff","wage"],
["In education, a list of topics to be covered is a…","syllabus","invoice","manifesto","prescription"],
["The scientific study of weather is…","meteorology","geology","botany","archaeology"],
["Software that detects malicious programs is…","antivirus software","a spreadsheet","a printer driver","a word processor"],
["In the military, an order given by a superior is a…","command","invoice","prescription","motion"],
["In court, the final decision about guilt or innocence is a…","verdict","diagnosis","forecast","receipt"],
["In a library, a list of books and their details is a…","catalogue","ledger","syllabus","manifesto"],
["A sustained general rise in prices is…","inflation","deflation","subsidy","recession"],
["A person who prepares a text for publication is an…","editor","auditor","surgeon","referee"],
["The left side of a ship when facing forward is…","port","starboard","stern","bow"],
["The gathering of ripe crops is the…","harvest","sowing","germination","pruning"]
]);
 add("Oral English: Word stress",[
["Which word has stress on the second syllable?","reLAX","TAble","GARden","WINdow"],
["Which word has stress on the second syllable?","beGIN","MOther","HAPpy","DOCtor"],
["Which word has stress on the second syllable?","aRRIVE","PICture","MOnkey","SUNlight"],
["Which word has stress on the first syllable?","TAble","reLAX","beGIN","aRRIVE"],
["Which word has stress on the first syllable?","DOCtor","aBOVE","rePLY","beLOW"],
["Which word has stress on the second syllable?","enJOY","TEAcher","BROther","WINter"],
["Which word has stress on the first syllable?","PREsent (noun)","preSENT (verb)","reCORD (verb)","imPORT (verb)"],
["Which word has stress on the second syllable?","beLIEVE","MAnage","ORder","CENtre"],
["Which word has stress on the first syllable?","HAPpen","reLATE","aGREE","beGIN"],
["Which word has stress on the second syllable?","forGET","GARden","TAble","DOCtor"],
["Which word has stress on the first syllable?","INcrease (noun)","inCREASE (verb)","conDUCT (verb)","reCORD (verb)"],
["Which word has stress on the second syllable?","deCIDE","WINdow","PICture","MOther"],
["Which word has stress on the first syllable?","QUIet","aLONE","reLAX","beLOW"],
["Which word has stress on the second syllable?","exPLAIN","TAble","SUNny","MArket"],
["Which word has stress on the first syllable?","PREsent (noun)","preSENT (verb)","conTEST (verb)","reBEL (verb)"],
["Which word has stress on the second syllable?","comPLETE","DOCtor","GARden","PICture"],
["Which word has stress on the first syllable?","COntract (noun)","conTRACT (verb)","inSULT (verb)","proDUCE (verb)"],
["Which word has stress on the second syllable?","rePEAT","TAble","WINter","HAPpy"],
["Which word has stress on the first syllable?","MOUNtain","aRRIVE","beGIN","reLAX"],
["Which word has stress on the second syllable?","surVIVE","MOther","CENtre","ORder"]
]);
 add("Oral English: Vowel sounds",[
["Which word contains the same vowel sound as 'seat'?","machine","head","said","great"],
["Which word contains the same vowel sound as 'bed'?","said","bead","food","late"],
["Which word contains the same vowel sound as 'cup'?","blood","boot","coat","food"],
["Which word contains the same vowel sound as 'food'?","blue","good","blood","rough"],
["Which word contains the same vowel sound as 'cat'?","plaid","caught","cart","cut"],
["Which word contains the same vowel sound as 'bird' in standard British pronunciation?","word","bad","board","beard"],
["Which word contains the same vowel sound as 'day'?","eight","get","said","greatly"],
["Which word contains the same vowel sound as 'hot' in standard British pronunciation?","clock","hope","boot","heart"],
["Which word contains the same vowel sound as 'car' in standard British pronunciation?","father","cat","cut","care"],
["Which word contains the same vowel sound as 'boy'?","coin","cone","can","keen"],
["Which word contains the same vowel sound as 'near' in standard British pronunciation?","here","hair","her","hard"],
["Which word contains the same vowel sound as 'go'?","road","good","got","gone"],
["Which word contains the same vowel sound as 'my'?","high","me","may","more"],
["Which word contains the same first vowel sound as 'about'?","again","seat","sat","suit"],
["Which word contains the same vowel sound as 'law' in standard British pronunciation?","caught","cat","cut","cotton"],
["Which word contains the same vowel sound as 'ten'?","many","tiny","tone","tune"],
["Which word contains the same vowel sound as 'see'?","key","sky","say","saw"],
["Which word contains the same vowel sound as 'fine'?","time","team","term","foam"],
["Which word contains the same vowel sound as 'book'?","good","food","boot","blood"],
["Which word contains the same vowel sound as 'late'?","great","let","light","lot"]
]);
 add("Oral English: Consonant sounds",[
["Which word begins with the same consonant sound as 'judge'?","giant","goat","yacht","kite"],
["Which word begins with the same consonant sound as 'ship'?","sugar","sip","chip","zip"],
["Which word ends with the same consonant sound as 'laugh'?","cough","bag","love","leaf"],
["Which word begins with the same consonant sound as 'phone'?","photo","vote","pot","boat"],
["Which word begins with the same consonant sound as 'thin'?","thought","then","tin","sin"],
["Which word begins with the same consonant sound as 'this'?","those","thin","tide","dice"],
["Which word begins with the same consonant sound as 'church'?","chair","share","year","jar"],
["Which word begins with the same consonant sound as 'zoo'?","zero","shoe","Sue","chew"],
["Which word begins with the same consonant sound as 'yes'?","yellow","jelly","zeal","cell"],
["Which word ends with the same consonant sound as 'sing'?","ring","sin","seen","sink"],
["Which word contains the same consonant sound as the middle consonant in 'measure'?","vision","mission","major","lemon"],
["Which word begins with the same consonant sound as 'kite'?","key","city","giant","sugar"],
["Which word begins with the same consonant sound as 'van'?","village","fan","ban","when"],
["Which word begins with the same consonant sound as 'quick'?","queen","keen","when","green"],
["Which word ends with the same consonant sound as 'cap'?","map","cab","can","cash"],
["Which word ends with the same consonant sound as 'bed'?","made","bet","bell","back"],
["Which word begins with the same consonant sound as 'river'?","road","laugh","wrote","jungle"],
["Which word begins with the same consonant sound as 'knight'?","name","kite","time","gate"],
["Which word also has a silent initial h like 'hour'?","honest","house","who","hot"],
["Which word begins with the same consonant sound as 'giant'?","giraffe","gate","get","goal"]
]);
 add("Oral English: Rhymes",[
["Which word rhymes with 'light'?","height","late","let","lit"],
["Which word rhymes with 'through'?","blue","though","rough","thought"],
["Which word rhymes with 'cough'?","off","though","through","bough"],
["Which word rhymes with 'said'?","bed","seed","side","sad"],
["Which word rhymes with 'break'?","steak","brick","back","broke"],
["Which word rhymes with 'great'?","late","get","grit","got"],
["Which word rhymes with 'heart'?","start","heard","hurt","heat"],
["Which word rhymes with 'blood'?","flood","food","broad","blade"],
["Which word rhymes with 'move'?","prove","love","cove","have"],
["Which word rhymes with 'does'?","buzz","dose","days","daze"],
["Which word rhymes with 'height'?","bite","heat","hat","hoot"],
["Which word rhymes with 'stone'?","phone","soon","seen","stun"],
["Which word rhymes with 'near'?","fear","far","four","fair"],
["Which word rhymes with 'chair'?","share","cheer","char","chore"],
["Which word rhymes with 'town'?","crown","tone","tune","ten"],
["Which word rhymes with 'face'?","place","peace","fleece","fuss"],
["Which word rhymes with 'could'?","wood","cold","code","called"],
["Which word rhymes with 'soul'?","role","sell","seal","sill"],
["Which word rhymes with 'blue'?","true","blow","below","blowout"],
["Which word rhymes with 'care'?","share","core","car","clear"]
]);
 window.JAMB_EXTRA_QUESTIONS=(window.JAMB_EXTRA_QUESTIONS||[]).concat(out);
})();