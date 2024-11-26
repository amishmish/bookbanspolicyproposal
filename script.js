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