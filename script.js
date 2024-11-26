function arwenPersonal() {
    const bye = document.getElementById("arwenB");
    const box = document.getElementById("arwenP");
    box.removeChild(bye);

    const node = document.createTextNode("I have two starkly different experiences with book bans. I spent the first thirteen years of my life in Texas, where conversations about race, gender, and sexuality were extraordinarily stigmatized. For instance, I was never exposed to any queer people in books or media until I was well into my teen years. It took me until much later in life to realize that this was not a coincidence, and that the reality was that so many of these books, particularly ones with language about identity that could be understood by people my age, were banned and not shelved in libraries where I lived. So many aspects of identity were just never talked about, and if they were, it was in whispers behind closed doors, not in classrooms. I really do believe that lack of access to certain voices negatively impacted my learning and growth, not just in the classroom. I remember sitting in silence while my friends bullied a girl who came out as transgender in seventh grade, not out of maliciousness, but because I was ignorant, and my ignorance contributed to a learning environment that was unsafe for her. I have no doubt that banning books with diverse voices directly contributes to moments like that all over the country. The stories we hear shape who we become as thinkers and academics, yes, but also how we show up for others in school hallways and lunchrooms. Then, I moved to Illinois, which has no banned books, and, as we’ll get to, was actually the first state to “ban” book bans. Suddenly, I could walk into my school library and pick up books written by absolutely anyone. The sudden exposure to so much diversity was life-altering. I became a much more thoughtful student. I was able to draw connections between experiences and moments across time and continents. I uncovered aspects of my identity that had been hidden before. I can't imagine the person I would be without access to these diverse perspectives and stories.")
    const sum = document.createElement("p");
    sum.appendChild(node);
    sum.setAttribute("class", "parabody student");
    sum.setAttribute("id", "arbye");

    const button = document.createElement("button");
    button.setAttribute("onClick", "arhide()");
    button.setAttribute("id", "arbyebut");

    const text = document.createTextNode("Hide");
    button.appendChild(text);

    box.appendChild(sum);
    box.appendChild(button);
}

function arhide() {
    const bye = document.getElementById("arbye");
    const byebut = document.getElementById("arbyebut");
    const box = document.getElementById("arwenP");

    box.removeChild(bye);
    box.removeChild(byebut);

    const button = document.createElement("button");
    button.setAttribute("onClick", "arwenPersonal()");
    button.setAttribute("id", "arwenB");

    const text = document.createTextNode("Summary");
    button.appendChild(text);

    box.appendChild(button);
}

function amishiPersonal() {
    const bye = document.getElementById("amishiB");
    const box = document.getElementById("amishiP");
    box.removeChild(bye);

    const node = document.createTextNode("Books were not banned in my county for the most part and our librarians curated a well rounded selection for us. Working on this project, I saw that three books that I have read were banned in our state in different counties. None of these books would be inappropriate for schools  - one of them was a book that I had read for my AP lit class in my senior year. One of them was the first book I read about other queer people of color. The book actually left a really lasting impact on me, and I heavily recommend it. It is one of my favorite books I have read - it was written so well that I finished it in an entire afternoon (and as a person who generally does not read that is an accomplishment). By banning this book, students are really missing out on a book that is truly a wonderful experience. It really goes into how complex sexuality can be and is really a good book. I am really sad to hear it got banned.")
    const sum = document.createElement("p");
    sum.appendChild(node);
    sum.setAttribute("class", "parabody student");
    sum.setAttribute("id", "ambye");

    const button = document.createElement("button");
    button.setAttribute("onClick", "amhide()");
    button.setAttribute("id", "ambyebut");

    const text = document.createTextNode("Hide");
    button.appendChild(text);

    box.appendChild(sum);
    box.appendChild(button);
}

function amhide() {
    const bye = document.getElementById("ambye");
    const byebut = document.getElementById("ambyebut");
    const box = document.getElementById("amishiP");

    box.removeChild(bye);
    box.removeChild(byebut);

    const button = document.createElement("button");
    button.setAttribute("onClick", "amishiPersonal()");
    button.setAttribute("id", "amishiB");

    const text = document.createTextNode("Summary");
    button.appendChild(text);

    box.appendChild(button);
}

function sukiPersonal() {
    const bye = document.getElementById("sukiB");
    const box = document.getElementById("sukiP");
    box.removeChild(bye);

    const node = document.createTextNode("In my country, some categories of books, such as political-sensitive books and books with naked or rude images, are banned on a national level. Some books on sexuality and gender are also being banned. However, these books are prohibited only in mainland China, and we can still find them in Hong Kong or Taiwan because these two regions have more freedom of speech and reading. Book bans have led to people using websites, sometimes illegal websites, to gain access to certain books. Personally, book bans in Chinese schools have not caused a huge problem for me in studying because teachers always provide all the materials needed for classes. Due to the cautious political environment and censorship, I never had the chance to talk about different political values and other sensitive topics until high school. In High school, if I wanted to explore more on some prohibited topics( E.g., criticism of the Communist Party and LGBTQ+ topics), I needed to use a VPN to log into Google and websites such as Z-library to download books or certain resources, which was definitely not easy.")

    const sum = document.createElement("p");
    sum.appendChild(node);
    sum.setAttribute("class", "parabody student");
    sum.setAttribute("id", "sbye");

    const button = document.createElement("button");
    button.setAttribute("onClick", "shide()");
    button.setAttribute("id", "sbyebut");

    const text = document.createTextNode("Hide");
    button.appendChild(text);

    box.appendChild(sum);
    box.appendChild(button);
}

function shide() {
    const bye = document.getElementById("sbye");
    const byebut = document.getElementById("sbyebut");
    const box = document.getElementById("sukiP");

    box.removeChild(bye);
    box.removeChild(byebut);

    const button = document.createElement("button");
    button.setAttribute("onClick", "sukiPersonal()");
    button.setAttribute("id", "sukiB");

    const text = document.createTextNode("Summary");
    button.appendChild(text);

    box.appendChild(button);
}