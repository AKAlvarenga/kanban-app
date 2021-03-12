const construct = (task, data) => {
    const check = document.createElement('input');

    check.setAttribute('type', 'checkbox');
    check.setAttribute('class', 'form-check-input');
    check.setAttribute('id', task.id);

    return check;
}

module.exports = construct;