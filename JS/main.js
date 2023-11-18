var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var GitHub = "https://github.com/RUKUNDO-Prince";
// var instagram ="https://www.instagram.com/ishi_kevin";
var twitter ="https://twitter.com/_kevinishimwe";
var linkedin ="https://www.linkedin.com/in/rukundo-prince-142539260/";
// var facebook ="https://www.facebook.com/kevin.ishimwe.142";
var email = "https://mail.google.com/mail/",


whois = [
"       ",  
"Hey there am Prince RUKUNDO",
"I'm full-stack software engineer from Rwanda who craft interactive and user-friendly softwares and websites",
"I'm currently still attending highschool, but pleased to work with anyone interested",
"I am also a self-taught programmer who have skills in different programing language but mostly",
"in JAVASCRIPT, PYTHON , JAVA ,C/C++ and WEB DEVELOPEMENT",
'     ',];

why =["    ", 
"The reason that you should work with me is that",
"I am the one with both skills and experience, all put together to craft the best websites and softwares, ",
"feel free to contact me for any project or idea",
"   ",];

projects =["If you are interested in my projects visit my GitHub at github.com/RUKUNDO-Prince"];


help =[
"    ",
"<p>",
'<FONT COLOR="#B89076">help</FONT>          Display all commands',
'<FONT COLOR="#B89076">whois</font>         Who is Prince ?',
'<FONT COLOR="#B89076">why</font>           if you want to know the reason to work with me',
'<FONT COLOR="#B89076">projects</font>      Display my projects',
'<FONT COLOR="#B89076">social</font>        Display social networks',
'<FONT COLOR="#B89076">history</font>       View command history ',
'<FONT COLOR="#B89076">email</font>         if you want email me',
'<FONT COLOR="#B89076">banner</font>        display top banner',
'<FONT COLOR="#B89076">sudo</font>          if you think that you are admin',
"   ",
'</p>'];


social =[
"    ",
'<FONT COLOR="#B89076">GitHub</font>        GitHub/RUKUNDO-Prince ',
'<FONT COLOR="#B89076">LinkedIn</font>      LinkedIn/RUKUNDO Prince',
'<FONT COLOR="#B89076">Twitter</font>       Twitter/_kevinishimwe',
'<FONT COLOR="#B89076">instagram</font>     Instagram/ishi_kevin',
'<FONT COLOR="#B89076">facebook</font>      Facebook/Ish kevin',
'  ',];


email = [];

banner = [
'<div style="color:white;">Hello from Prince. It\'s a pleasure to have you here.</div>',
"  ",
"<FONT COLOR='#addb67'><small>                _            _.,----,</small>",
"<FONT COLOR='#addb67'><small>     __  _.-._ / '-.        -  ,._  \\)",
"<FONT COLOR='#addb67'><small>    |  `-)_   '-.  \\       / < _ )/' }",
"<FONT COLOR='#addb67'><small>    /__    '-.  \\   '-, ___(c-(6)=(6)",
"<FONT COLOR='#addb67'><small>     , `'.    `._ '.  _,'   >\\    '  )",
"<FONT COLOR='#addb67'><small>     :;;,,'-._   '---' (  ( '/`. -='/",
"<FONT COLOR='#addb67'><small>    ;:;;:;;,  '..__    ,`-.`)'- '--'            #########    ##########     ##   ####       ##      ########   #########",
"<FONT COLOR='#addb67'><small>    ;';:;;;;;'-._ /'._|   Y/   _/' \\            ##      ##   ##       ##    ##   ##  ##     ##    ##           ##",
"<FONT COLOR='#addb67'><small>          ''''._ F    |  _/ _.'._   `\\          ##      ##   ##       ##    ##   ##   ##    ##    ##           ##",
"<FONT COLOR='#addb67'><small>                 L    \\   \\/     '._  \\         #########    ##########     ##   ##    ##   ##    ##           #########",
"<FONT COLOR='#addb67'><small>          .-,-,_ |     `.  `'---,  \\_ _|        ##           #####          ##   ##     ##  ##    ##           ##",
"<FONT COLOR='#addb67'><small>          //    'L    /  \\,   ('--',=`)7        ##           ##  ###        ##   ##      ## ##    ##           ##",
"<FONT COLOR='#addb67'><small>         | `._       : _,  \\  /'`-._L,_'-._     ##           ##    ###      ##   ##       ####      ########   #########",
"<FONT COLOR='#addb67'><small>         '--' '-.\\__/ _L   .`'         './/                                                                     @Prince-RUKUNDO 2023",
"<FONT COLOR='#addb67'><small>                     [ (  /",
"<FONT COLOR='#addb67'><small>                      ) `{",
"<FONT COLOR='#addb67'><small>                      \\__)",
'<FONT COLOR="#FFFF99">welcome to my terminal-like portfolio</div>',
'<FONT COLOR="#FFFF99">For a list of available commands, type <FONT COLOR="#519975">help</font>.',];



var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);


//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("Welcome@Prince-RUKUNDO~$: " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "why":
      loopLines(why, "color2 margin", 80);
      break;
    case "video":
      addLine("Opening YouTube...", "color2", 80);
      newTab(youtube);
      break;
    case "sudo":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(function() {
        window.open('https://github.com/RUKUNDO-Prince');
      }, 1000); 
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "secret":
      liner.classList.add("password");
      pw = true;
      break;
    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:carterk279@gmail.com">carterk279@gmail.com</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    // socials
    case "facebook":
      addLine("Opening Facebook...", "color2", 80);
      newTab(facebook);
      break;
    case "twitter":
      addLine("Opening Twitter...", "color2", 0);
      newTab(twitter);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "instagram":
      addLine("Opening Instagram...", "color2", 0);
      newTab(instagram);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(GitHub);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
