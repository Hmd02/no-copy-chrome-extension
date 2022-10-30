document.addEventListener("selectstart",()=>
{
    window.getSelection().removeAllRanges();
    alert("Can't copy")
    console.log(window)
});
