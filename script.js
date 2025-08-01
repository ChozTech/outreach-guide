
document.getElementById('playbookForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('userName').value;
  const target = document.getElementById('targetName').value;
  const title = document.getElementById('jobTitle').value;
  const goal = document.getElementById('outreachGoal').value;

  let outputText = `🎯 Personalized Outreach Strategy\n\n`;
  outputText += `👤 From: ${name}\n`;
  outputText += `👥 To: ${target}\n`;
  outputText += `🎯 Target Role: ${title}\n`;
  outputText += `🎯 Goal: ${goal}\n\n`;

  outputText += `📨 First-Touch Message:\nHi ${target},\n\nMy name is ${name}, a college student excited about tech and sales. I came across your role as a ${title} and would love to connect for a quick 15-min chat to learn more about your journey. Would you be open to a short conversation this week?\n\n`;

  outputText += `📆 Follow-Up Cadence:\n`;
  outputText += `+2 days — Just checking in, would love to hear your story!\n`;
  outputText += `+5 days — Came across your recent work at [Company], very inspiring. Open to connecting?\n`;
  outputText += `+8 days — No worries if timing’s off — I’ll stay tuned to your journey.\n\n`;

  outputText += `🛑 Objection Handling:\n“We’re not hiring.” → No worries — just here to learn.\n“Too busy.” → Totally get it — even 1-2 lines would mean a lot!\n\n`;

  outputText += `📞 Phone Talk Track:\nHi ${target}, this is ${name}. Super quick — I’m a student curious about tech sales and hoping to learn from someone doing it. Would 10 mins this week work for a call?`;

  const outputDiv = document.getElementById('output');
  outputDiv.innerText = outputText;
  outputDiv.style.display = 'block';
});
