const extractKeywords = (text) => {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9+\-*/= ]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 4);
  return [...new Set(words)].slice(0, 8);
};

const detectCode = (text) => /```|function |const |let |class |def |console\.|=>|import |#include|public static/.test(text);

export function generateStudyContent(topic, mode = "seven-mark", options = {}) {
  const cleanTopic = topic.trim();
  const keywords = extractKeywords(cleanTopic);
  const heading = cleanTopic.length > 90 ? cleanTopic.slice(0, 90) + "..." : cleanTopic;
  const subject = options.subject || "Selected Subject";
  const days = Number(options.days || 7);
  const hours = Number(options.hours || 2);
  const target = options.target || "score better in exams";

  if (mode === "revision") {
    return `## Revision Notes: ${heading}

### Core Idea
${cleanTopic}

### High-Yield Points
${keywords.map((key, index) => `${index + 1}. **${key}**: connect this term to the definition, one example, and one exam use case.`).join("\n") || "1. Define the topic clearly.\n2. Add two supporting points.\n3. Finish with an example or application."}

### Quick Recall
- What is the definition?
- Why does it matter?
- Which formula, diagram, or example supports it?
- What mistake should be avoided in an exam answer?

### 5-Minute Revision Plan
1. Read the definition aloud.
2. Write the key points without looking.
3. Draw a compact flowchart.
4. Solve or explain one example.
5. Review weak points once more.`;
  }

  if (mode === "flowchart") {
    return `## Flowchart-Ready Breakdown: ${heading}

\`\`\`text
Start
  |
  v
Identify topic and keywords
  |
  v
Write definition or objective
  |
  v
Split into causes / process / effects / examples
  |
  v
Add formula, diagram cue, or code logic when relevant
  |
  v
Conclude with result, limitation, or application
End
\`\`\`

### Diagram Labels
${(keywords.length ? keywords : ["definition", "process", "example", "result"]).map((key) => `- ${key}`).join("\n")}`;
  }

  if (mode === "questions") {
    return `## Practice Questions: ${heading}

1. Define the main concept and explain it with a suitable example.
2. Write a 7-mark answer covering definition, working, advantages, limitations, and conclusion.
3. Draw a flowchart or labelled diagram for the process.
4. Compare this topic with a related concept.
5. List formulas, keywords, or code patterns connected to the topic.

### Self-Check Rubric
- Definition is clear.
- Answer has headings.
- Example is specific.
- Diagram or flow is easy to reproduce.
- Conclusion is exam-oriented.`;
  }

  if (mode === "planner") {
    const totalSessions = Math.max(3, Math.min(days, 21));
    const dailyHours = Math.max(1, Math.min(hours, 8));
    const plan = Array.from({ length: totalSessions }, (_item, index) => {
      const day = index + 1;
      const focus = index === 0 ? "baseline reading and syllabus scan" : index === totalSessions - 1 ? "mock test and final weak-area revision" : `topic block ${day - 1} with active recall`;
      return `| Day ${day} | ${focus} | ${dailyHours} hour${dailyHours > 1 ? "s" : ""} | Output: short notes + 5 questions |`;
    }).join("\n");

    return `## Personal Revision Planner: ${subject}

### Goal
Prepare **${heading}** to ${target}.

### Daily Plan
| Day | Focus | Time | Deliverable |
| --- | --- | --- | --- |
${plan}

### Rules I Followed While Building This Planner
1. First pass is for understanding, not memorizing.
2. Middle sessions use active recall and question practice.
3. Last session is for testing, mistakes, and fast revision.

### Tracking Checklist
- Mark completed sessions daily.
- Write one doubt after every session.
- Revise mistakes before starting the next topic.
- Keep formulas and definitions on one page.`;
  }

  if (mode === "exam-kit") {
    return `## Exam Kit: ${heading}

### 1. Definition Template
${heading} refers to the concept/process where the main idea is explained through key terms, working steps, and one suitable example.

### 2. 7-Mark Answer Skeleton
1. Introduction
2. Definition
3. Working or explanation
4. Diagram / flowchart cue
5. Advantages
6. Limitations
7. Conclusion

### 3. Keywords To Remember
${(keywords.length ? keywords : ["definition", "working", "example", "application", "limitation"]).map((key) => `- ${key}`).join("\n")}

### 4. Flowchart Cue
\`\`\`text
Concept -> Steps -> Example -> Advantage -> Limitation -> Conclusion
\`\`\`

### 5. Last-Minute Oral Practice
- Explain it in 30 seconds.
- Give one example without looking at notes.
- Write the conclusion in one line.
- Draw the flow once from memory.`;
  }

  return `## 7-Mark Answer: ${heading}

### Introduction
${cleanTopic} is an important exam topic because it connects the core definition with practical application, structured explanation, and revision-friendly keywords.

### Main Explanation
1. **Definition:** State the concept in direct language before expanding it.
2. **Working / Process:** Explain the steps, mechanism, or logic in sequence.
3. **Key Points:** Use keywords such as ${keywords.join(", ") || "definition, process, example, advantage, limitation"}.
4. **Example:** Add one practical, numerical, coding, or real-world example depending on the subject.

### Advantages
- Makes the concept easier to apply.
- Helps compare related ideas.
- Supports problem solving and diagram-based answers.

### Limitations
- Incomplete answers lose marks when examples or diagrams are missing.
- Memorized answers can fail if the question asks for application.

### Conclusion
For a strong 7-mark response, write in headings, include one example, and end with a concise conclusion that links the topic back to its purpose.`;
}

export function generateChatReply({ content, history = [], style = "balanced" }) {
  const text = content.trim();
  if (detectCode(text) || style === "code") {
    return `## Code Assistant

I reviewed your code/request. Here is a structured way to approach it:

### What it is doing
- Identify the input, transformation, and output.
- Trace state changes line by line.
- Check async boundaries, missing returns, incorrect imports, and data shape mismatches.

### Debug Checklist
1. Reproduce the error with the smallest input.
2. Log the exact value before the failing line.
3. Verify package imports and environment variables.
4. Add a focused test for the fixed behavior.

### Cleaner Pattern
\`\`\`js
function explainProblem(input) {
  if (!input) return "Provide a concrete value first.";
  return "Break the problem into inputs, steps, and expected output.";
}
\`\`\`

Paste the exact error or file next, and I can narrow this down to the failing line.`;
  }

  if (/7[- ]?mark|exam|answer/i.test(text)) return generateStudyContent(text, "seven-mark");
  if (/revision|revise|notes/i.test(text)) return generateStudyContent(text, "revision");
  if (/flowchart|diagram|breakdown/i.test(text)) return generateStudyContent(text, "flowchart");
  if (/question|practice|quiz/i.test(text)) return generateStudyContent(text, "questions");
  if (/formula|equation/i.test(text)) {
    return `## Formula Extraction

### Likely Formula Targets
- Look for variables connected by symbols such as =, +, -, /, ^, sqrt, sin, cos, log.
- Write each formula with units and define every symbol.
- Add one substitution example after the formula.

### From Your Prompt
${text}

### Exam Format
1. Formula
2. Meaning of each term
3. Unit
4. One solved example
5. Common mistake`;
  }

  const previous = history.slice(-4).map((message) => `- ${message.role}: ${message.content.slice(0, 100)}`).join("\n");
  return `## Study Response

${style === "concise" ? "Here is the short revision-first version." : "Here is a structured explanation you can study from."}

### Direct Answer
${text}

### Key Points
- Start with a definition.
- Split the answer into headings.
- Include examples, diagrams, formulas, or code where relevant.
- End with a conclusion that answers why the concept matters.

### Suggested Next Step
Ask me to convert this into **7-mark format**, **revision notes**, **flowchart format**, or **practice questions**.

${previous ? `### Recent Context\n${previous}` : ""}`;
}
