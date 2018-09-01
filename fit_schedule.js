function getChildrenOrEmptyString(lesson, index) {
    if (lesson.childElementCount > index) {
        return lesson.children[index].textContent;
    } else {
        return "";
    }
}

function getType(lesson) {
    getChildrenOrEmptyString(lesson, 0)
}

function getName(lesson) {
    getChildrenOrEmptyString(lesson, 1)
}

function getRoom(lesson) {
    getChildrenOrEmptyString(lesson, 2)
}

function getTutor(lesson) {
    getChildrenOrEmptyString(lesson, 3)
}

function getColumnNumber(lesson) {
    return lesson.parentNode.cellIndex;
}

function getRowNumber(lesson) {
    return lesson.parentNode.parentNode.rowIndex;
}

function compareLesson(lhs, rhs) {
    return getType(lhs) === getType(rhs)
        && getName(lhs) === getName(rhs)
        && getRoom(lhs) === getRoom(rhs)
        && getTutor(lhs) === getTutor(rhs)
        && getColumnNumber(lhs) === getColumnNumber(rhs)
        && getRowNumber(lhs) === getRowNumber(rhs)
}

function findLessonEntriesFromDocument(doc, names) {
    return [].slice.call(doc.querySelectorAll("div .cell"))
        .filter(cell => cell.childElementCount > 1 && names.includes(cell.children[1].textContent));
}

function findLessonEntriesFromAllTables(names) {
    let lessons = [];
    for (let groupN = 16201; groupN <= 16209; groupN++) {
        let doc = getDocumentByUrl("https://table.nsu.ru/group/" + groupN);
        lessons = lessons.concat(findLessonEntriesFromDocument(doc, names));
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

function removeLessonEntries() {
    findLessonEntriesFromDocument(document, Array.prototype.slice.apply(arguments)).forEach(lesson => lesson.remove());
}

function addLessonEntries() {
    insertLessons(findLessonEntriesFromAllTables(Array.prototype.slice.apply(arguments)))
}
