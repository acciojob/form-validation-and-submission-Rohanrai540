//your JS code here. If required.
<script>
  const checkbox = document.getElementById("termsCheckbox");
  const submitBtn = document.getElementById("submitBtn");

  checkbox.addEventListener("change", function () {
    submitBtn.disabled = !this.checked;
  });
</script>