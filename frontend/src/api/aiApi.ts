export async function sendMessage(text: string, history: any[]) {
  const res = await fetch("http://localhost:8000/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      message: text,
      history: history,  // gửi lịch sử
    }),
  });

  return await res.json();
}
