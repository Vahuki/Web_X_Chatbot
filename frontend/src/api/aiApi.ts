export async function sendMessage(text: string) {
    const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({ message: text }),
        
    });
    console.log("Backend trả về:", res);
    
  return await res.json();
}
