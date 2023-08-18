


function GetTaskType() {
    var taskType = document.querySelector('[data-testid="issue.views.issue-base.foundation.change-issue-type.tooltip--container"]');
    var input = taskType.firstChild.firstChild.alt;
    let result;
    switch (input) {
        case "Task":
            result = "[Feature]";
            break;
        case "Story":
            result = "[Update]";
            break;
        case "Bug":
            result = "[Fix]";
            break;
        default:
            console.log("ewr");
            break;
    }
    return result;
}
function GetTaskCode() {
    var taskCode = document.querySelector('[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]');
    return taskCode.innerHTML.replace(/<[^>]*>/g, "");
}
function GetTaskCotent() {
    var taskContent = document.querySelector('[data-testid="issue.views.issue-base.foundation.summary.heading"]');
    return taskContent.innerHTML.replace(/<[^>]*>/g, "");
}
async function  SaveToClipBoard(copyText) {

    // Copy the text inside the text field
    await navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert("Copied the text: " + copyText);
}
async function CreateButton() {
    const titleClass = document.querySelector('[data-testid="issue.views.issue-details.issue-layout.left-most-column"]');
    var title = titleClass.childNodes[2];
    const copyIcon = document.createElement("button");
    copyIcon.type = "button";
    copyIcon.style.placeContent = "end end";
    copyIcon.innerHTML = "<img src=\"https://icons-for-free.com/iconfiles/png/512/clipboard+copy-1330392998507607700.png\" width=\"24px\" height=\"24px\">";
    copyIcon.className = "copy-btn";
    const div = document.createElement("div");
    div.role = "presenntation";
    div.style.paddingLeft = "30px";
    div.style.paddingTop = "0px";
    div.appendChild(copyIcon);
    div.style.position = "initial";
    div.style.border = "white";


    copyIcon.addEventListener("click", () => {

        var type = GetTaskType();
        var code = GetTaskCode();
        var content = GetTaskCotent();
        var sum = `${type} [${code}] ${content}`;
        SaveToClipBoard(sum);
    });
    await title != null;
    title.appendChild(div);
}
document.body.onload = () => {
    CheckAndCreateButton();
}
document.body.onanimationend = () => {
    CheckAndCreateButton();
}

function CheckAndCreateButton() {
    const websitePattern = ['https://amanotesjsc.atlassian.net/jira/software/c/projects/GSG/boards/*?modal=detail&selectedIssue=*', 'https://amanotesjsc.atlassian.net/browse/GSG-*'];
    for (var i = 0; i < websitePattern.length; i++) {
        if (matchPattern(document.URL, websitePattern[i])) {
            const copyBtnExits = document.getElementsByClassName("copy-btn")[0];
            if (!copyBtnExits) {
                CreateButton();
                break;
            }
        }
    }
}

//Function to match the URL with the pattern
function matchPattern(url, pattern) {
    const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$');
    return regex.test(url);
}
