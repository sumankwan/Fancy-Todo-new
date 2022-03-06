// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://fancytodo-suhardimanagung.herokuapp.com'

$(document).ready(function () {
    checkAuth()
})

function checkAuth () {
    if (localStorage.getItem('token')) {
        $('#login-page').hide()
        $('#register-page').hide()
        $('#home-page').show()
        fetchTodo()
        $('#addform-page').hide()
        $('#updateform-page').hide()
        $('#holiday-years').hide()
        $('#holiday-page').hide()
    } else {
        $('#login-page').show()
        $('#register-page').hide()
        $('#home-page').hide()
        $('#addform-page').hide()
        $('#updateform-page').hide()
        $('#holiday-years').hide()
        $('#holiday-page').hide()
    }
}

function login(event) {
    event.preventDefault()
    const email = $('#login-email').val()
    const password =$('#login-password').val()

    $.ajax({
        url: `${baseUrl}/users/login`,
        method:'post',
        data: {
            email: email,
            password: password
        }
    })
        .done(response => {
            console.log(response)
            localStorage.setItem('token', response.token)
            checkAuth()
        })
        .fail(err => {
            console.log(err)
        })
}

function showRegisterForm(event) {
    event.preventDefault()
    $('#login-page').hide()
    $('#register-page').show()
    $('#home-page').hide()
    $('#addform-page').hide()
    $('#updateform-page').hide()
    $('#holiday-years').hide()
    $('#holiday-page').hide()
}

function register(event) {
    event.preventDefault()
    const email = $('#register-email').val()
    const password =$('#register-password').val()

    $.ajax({
        url: `${baseUrl}/users/register`,
        method:'post',
        data: {
            email: email,
            password: password
        }
    })
        .done(response => {
            console.log(response)
            checkAuth()
        })
        .fail(err => {
            console.log(err)
        })
}

function logout () {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    })
    localStorage.clear()
    checkAuth()
}

function fetchTodo () {
    $.ajax({
        url: `${baseUrl}/todos`,
        method: 'get',
        headers: {
            token: localStorage.token
        }
    })
        .done(response => {
            $('#show-todos').empty()
            response.todo.forEach(todo => {
                let template = 
                `
                <div class="col">
                    <div class="card text-left mt-3">
                        <div class="card-header">
                            <span id="">Due Date: ${todo.due_date}</span>
                        </div>
                        <div class="card-body row">
                            <div class="col-9">
                            <p class="card-text">Title: ${todo.title}</p>
                            <p class="card-text">Description: ${todo.description}</p>
                            <p class="card-text">Status: ${todo.status}</p>
                            <button type="button" class="btn btn-success" onclick="showUpdateTodoForm(${todo.id})">Update</button> <button type="button" class="btn btn-danger" onclick="deleteTodo(${todo.id})">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                `

                $('#show-todos').append(template)
            })
        })
        .fail(err => {
            console.log(err)
        })
}

function ShowAddTodoForm () {
    $('#login-page').hide()
    $('#home-page').hide()
    $('#addform-page').show()
    $('#updateform-page').hide()
}

function addTodo (event) {
    event.preventDefault()
    const title = $('#add-title').val()
    const description = $('#add-description').val()
    const status = $('#add-status').val()
    const due_date = $('#add-due_date').val()

    $.ajax({
        url: `${baseUrl}`,
        method: 'post',
        data: {
            title,
            description,
            status,
            due_date
        },
        headers: {
            token: localStorage.token
        }
    })
        .done(_ => {
            checkAuth()
        })
        .fail(err => {
            console.log(err)
        })
        .always(() => {
            $('#add-title').val('')
            $('#add-description').val('')
            $('#add-status').val('')
            $('#add-due_date').val('')
        })
}

function deleteTodo (id) {
    $.ajax({
        url: `${baseUrl}/todos/${id}`,
        method: 'delete',
        headers: {
            token: localStorage.token
        }
    })
        .done(() => {
            checkAuth()
        })
        .fail(err => {
            console.log(err)
        })
}

function showUpdateTodoForm (id) {
    $('#login-page').hide()
    $('#home-page').hide()
    $('#addform-page').hide()
    $('#updateform-page').show()

    $.ajax({
        url: `${baseUrl}/todos/${id}`,
        method: 'get',
        headers: {
            token: localStorage.token
        }
    })
        .done(response => {
            console.log(response.todo.due_date)
            let date = ''
            for (let i = 0; i < response.todo.due_date.length; i++) {
                if (i < 10) {
                    date += response.todo.due_date[i]
                }    
            }

            $('#update-id').val(response.todo.id)
            $('#update-title').val(response.todo.title)
            $('#update-description').val(response.todo.description)
            $('#update-status').val(response.todo.status)
            $('#update-due_date').val(date)
        })
        .fail(err => {
            console.log(err)
        })
}

function updateTodo (event) {
    event.preventDefault()

    const id = $('#update-id').val()
    const title = $('#update-title').val()
    const description = $('#update-description').val()
    const status = $('#update-status').val()
    const due_date = $('#update-due_date').val()

    $.ajax({
        url: `${baseUrl}/todos/${id}`,
        method: 'put',
        data: {
            title,
            description,
            status,
            due_date
        },
        headers: {
            token: localStorage.token
        }
    })
        .done(_ => {
            checkAuth()
        })
        .fail(err => {
            console.log(err)
        })
}

function onSignIn(googleUser) {
    let id_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        url: `${baseUrl}/users/googleSignIn`,
        method: 'post',
        data: {
            id_token
        }
    })
        .done(response => {
            localStorage.setItem('token', response.token)
            checkAuth()
        })
        .fail(err => {
            console.log(err)
        })
  }

  function getHoliday() {
    const year = $('#show-years').val()
    $('#login-page').hide()
    $('#home-page').hide()
    $('#addform-page').hide()
    $('#updateform-page').hide()
    $('#holiday-years').show()
    $('#holiday-page').show()

    $('#show-holidays').empty()
    $.ajax({
        url: `${baseUrl}/holiday/${year}`,
        method: 'get',
        headers: {
            token: localStorage.token
        }
    })
        .done((response) => {
            console.log(response)
            for (let i = 0; i < response.data.response.holidays.length; i++) {
                let publicHoliday =
                `
                <div class="col">
                    <div class="card text-left mt-3">
                        <div class="card-header">
                            <span id="">${response.data.response.holidays[i].name}</span>
                        </div>
                        <div class="card-body row">
                            <div class="col-9">
                            <p class="card-text">${response.data.response.holidays[i].date.iso}</p>
                            <p class="card-text">${response.data.response.holidays[i].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
                console.log(publicHoliday)
                $('#show-holidays').append(publicHoliday)
            }
        })
        .fail((err) => {
            console.log(err)
        })
    }

function showYears() {
    $('#login-page').hide()
    $('#home-page').hide()
    $('#addform-page').hide()
    $('#updateform-page').hide()
    $('#holiday-years').show()
    $('#holiday-page').hide()

    let currentDate = new Date ()
    let currentYear = currentDate.getFullYear()

    for (let i = currentYear; i >= 1950; i--) {
        let year =
        `
        <option value="${i}">${i}</option>
        `
        $('#show-years').append(year)
    }
}