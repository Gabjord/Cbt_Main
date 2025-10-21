import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabase = createClient(
  "https://qbksefoftvyiouvluhuk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFia3NlZm9mdHZ5aW91dmx1aHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTQ0NzcsImV4cCI6MjA2NTU5MDQ3N30.N54b_hcce6x-IhmuOYksMXcoMyXurcku0eHGgUsiKbo"
);

document.addEventListener("DOMContentLoaded", async () => {
  // Check session
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (!session) {
    window.location.href = "login.html";
    return;
  }

  // Update UI with actual user data
  updateUserUI(session.user);

  // Setup logout button
  const logoutBtn = document.querySelector('a[href="./login.html"]');
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      const { error } = await supabase.auth.signOut();
      window.location.href = "login.html";
    });
  }
});

async function updateUserUI(user) {
  try {
    // Fetch additional user data
    const { data, error } = await supabase
      .from("user")
      .select("full_name, nin_number")
      .eq("auth_id", user.id)
      .single();

    if (error) throw error;

    // Update UI elements
    const nameElement = document.querySelector(
      ".font-semibold.text-lg.text-green-600"
    );
    const idElement = document.querySelector(".ml-0.5");

    if (nameElement) nameElement.textContent = data.full_name || user.email;
    if (idElement)
      idElement.textContent = `ID: ${data.nin_number || user.id.slice(0, 8)}`;
  } catch (err) {
    console.error("Error updating user UI:", err);
  }
}
