function findLessonEntriesFromDocument(doc, lessonName) {
    return [].slice.call(doc.querySelectorAll("div .cell"))
        .filter(cell => cell.childElementCount !== 0)
        .filter(lesson => lesson.children[1].textContent === lessonName);
}

function removeLessonEntries(lessonName) {
    findLessonEntriesFromDocument(document, lessonName).forEach(lesson => lesson.remove());
}

function findLessonEntriesFromAllTables(lessonName) {
    let lessons = [];
    for (let groupN = 16201; groupN <= 16209; groupN++) {
        lessons = lessons.concat(findLessonEntriesFromDocument(getDocumentByUrl("https://table.nsu.ru/group/" + groupN), lessonName));
    }
    return lessons;
}


function insertLessons(lessons) {
    let table = document.querySelector(".time-table > tbody");
    lessons.filter((item, pos, self) => self.findIndex(currentLesson => compareLesson(currentLesson, item)) === pos)
        .forEach(lesson => {
            let cells = table.rows[getRowNumber(lesson)].cells[getColumnNumber(lesson)];
            if (cells.children.length !== 0 && cells.children[0].children.length === 0) {
                cells.replaceChild(lesson, cells.firstChild);
            } else {
                cells.appendChild(lesson);
            }
        });
}

function getDocumentByUrl(url) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send();
    let parser = new DOMParser();
    return parser.parseFromString(xmlHttp.responseText, "text/html");
}

function compareLesson(lhs, rhs) {
    return getRoom(lhs) === getRoom(rhs)
        && getTutor(lhs) === getTutor(rhs)
        && getColumnNumber(lhs) === getColumnNumber(rhs)
        && getRowNumber(lhs) === getRowNumber(rhs)
}

function getColumnNumber(lesson) {
    return lesson.parentNode.cellIndex;
}

function getRowNumber(lesson) {
    return lesson.parentNode.parentNode.rowIndex;
}

function getRoom(lesson) {
    if (lesson.children.length > 2) {
        return lesson.children[2].textContent;
    } else {
        return "";
    }
}

function getTutor(lesson) {
    if (lesson.children.length > 3) {
        return lesson.children[3].textContent;
    } else {
        return "";
    }
}