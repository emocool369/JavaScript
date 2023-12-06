function editElement(ref, match, replacer) {
    const text = ref.textContent; //vzimam teksta Hello, %insert name here%!
    const editedText = text.replace(new RegExp(match, 'g'), replacer);
    ref.textContent = editedText;


}