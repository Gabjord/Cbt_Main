import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabase = createClient(
  "https://qbksefoftvyiouvluhuk.supabase.co",

  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFia3NlZm9mdHZ5aW91dmx1aHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTQ0NzcsImV4cCI6MjA2NTU5MDQ3N30.N54b_hcce6x-IhmuOYksMXcoMyXurcku0eHGgUsiKbo"
);

function updateAuthUI(user) {
  console.log("User signed up:", user.email);
}

function checkUserSession() {
  console.log("Checking session...");
}

document.addEventListener("DOMContentLoaded", () => {
  checkUserSession();

  const form = document.getElementById("registration-form");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  // password validation
  if (passwordInput && confirmPasswordInput) {
    confirmPasswordInput.addEventListener("input", () => {
      if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.classList.add("border-red-500");
      } else {
        confirmPasswordInput.classList.remove("border-red-500");
      }
    });
  }
  function isEmailValid(email) {
    if (!email || typeof email !== "string") return false;
    email = email.trim();
    return /^[A-Za-z]/.test(email);
  }

  function isAlphabetOnly(value) {
    return /^[A-Za-z]+$/.test(value);
  }

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const first_Name = formData.get("first_Name");
      const middle_Name = formData.get("middle_Name");
      const last_Name = formData.get("last_Name");
      const email = formData.get("email");
      const nin_Number = formData.get("nin_Number");
      const password = formData.get("password");
      const confirm_Password = formData.get("confirm_Password");
      const birth_Date = formData.get("birth_Date");
      const Sex = formData.get("Sex");

      const marital_Status = formData.get("marital_Status");
      const nationality = formData.get("nationality");
      const course = formData.get("course");
      const first_Institution = formData.get("first_Institution");
      const second_Institution = formData.get("second_Institution");
      const third_Institution = formData.get("third_Institution");
      const exam_Location = formData.get("exam_Location");
      const sittings = formData.get("sittings");
      const exam_Type = formData.get("exam_Type");
      const awaiting_Results = formData.get("awaiting_Results");
      const special_Needs = formData.get("special_Needs");

      if (!isAlphabetOnly(first_Name)) {
        alert("First name should contain only letters (A–Z).");
        return;
      }

      if (middle_Name && !isAlphabetOnly(middle_Name)) {
        alert("Middle name should contain only letters (A–Z).");
        return;
      }

      if (!isAlphabetOnly(last_Name)) {
        alert("Last name should contain only letters (A–Z).");
        return;
      }
      if (!isEmailValid(email)) {
        alert("Email must start with a letter (A–Z).");
        return;
      }
      if (password !== confirm_Password) {
        alert("Passwords do not match!");
        return;
      }

      if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
      }

      try {
        const { data: authData, error: authError } = await supabase.auth.signUp(
          {
            email,
            password,
            options: {
              data: {
                full_name: `${first_Name} ${
                  middle_Name ? middle_Name + " " : ""
                }${last_Name}`,
                birth_Date: birth_Date,
              },

              emailRedirectTo: "http://localhost:5500/confirm.html",
            },
          }
        );

        if (authError) throw authError;

        const { error: insertError } = await supabase.from("user").insert([
          {
            auth_id: authData.user.id,
            last_Name: last_Name,
            middle_Name: middle_Name,
            first_Name: first_Name,
            email: email,
            nin_Number: nin_Number,
            birth_Date: birth_Date,
            marital_Status: marital_Status,
            Sex: Sex,
            nationality: nationality,
            course: course,
            first_Institution: first_Institution,
            second_Institution: second_Institution,
            third_Institution: third_Institution,
            exam_Location: exam_Location,
            sittings: sittings,
            exam_Type: exam_Type,
            awaiting_Results: awaiting_Results,
            special_Needs: special_Needs,
          },
        ]);

        if (insertError) throw insertError;

        alert("Signup complete! Check your email to confirm.");
        form.reset();
        updateAuthUI(authData.user);
      } catch (error) {
        console.error("Error:", error);
        alert("Error: " + error.message);
      }
    });
  }
});
