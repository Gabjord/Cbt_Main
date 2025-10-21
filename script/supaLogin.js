import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabase = createClient(
  "https://qbksefoftvyiouvluhuk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFia3NlZm9mdHZ5aW91dmx1aHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTQ0NzcsImV4cCI6MjA2NTU5MDQ3N30.N54b_hcce6x-IhmuOYksMXcoMyXurcku0eHGgUsiKbo"
);

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = loginForm["login-email"].value;
      const password = loginForm["login-password"].value;

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Login failed:", error.message);
        document.getElementById("login-message").textContent =
          "Login failed: " + error.message;
        document.getElementById("login-message").style.color = "red";
      } else {
        console.log("Login successful:", data.user);
        document.getElementById("login-message").textContent =
          "Login successful!";
        document.getElementById("login-message").style.color = "green";

        // Redirect after login
        setTimeout(() => {
          window.location.href = "./dashboard.html";
        }, 1000);
      }
    });
  }
});
