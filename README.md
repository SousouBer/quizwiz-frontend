<div>
	<div align="center">
	<img width="300" src="https://redberry.gitbook.io/~gitbook/image?url=https%3A%2F%2F137533272-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FmYyJivD9aWCdnt2uuALP%252Fuploads%252FLXxX6O4Ii0ZJx7I4QZHw%252FFrame%25201000002530.png%3Falt%3Dmedia%26token%3D48b627f7-be16-48ce-9bcd-9215600d85af&width=400&dpr=3&quality=100&sign=a56aac0889e0afe59a37ede27a1a747df90dd5e3a265056b15558b95d9c318e4">
	</div>
	<h1 align="center">Quiz Wiz</h1>
	<p align="center">Play with us, explore with us!</p>
</div>

Quiz wiz is the platform for both testing your knowledge and having a blast while doing it! Dive into a world of endless quizzes covering a wide variety of categories and difficulty levels. With the filtering system the app utilizes, finding the perfect quizzes is going to be quite easy.
Each quiz has different number of questions, points, and time it requires to complete. When a quiz is completed, the results are shown on the screen

Moreover, you have the option to register and log in. By creating an account, you gain access to additional features such as viewing your completed quizzes. Once logged in, you can easily track your progress and explore quizzes of your interests. However, when logged in. you'll never be able to retake a quiz you've already completed. So keep that in mind!

On the main page, you can also see how many users have completed a particular quiz. Whether you are passionate about history, psychology, or science, Quiz Wiz has something for everyone. Engage in quizzes, expand your knowledge, and have fun along the way.

We invite you to give Quiz Wiz a try. We guarantee you'll have a really good experience!

#

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Migrations](#migration)
- [Development](#development)
- [Resources](#resources)

#

### Prerequisites

- *PHP@8.3 and up*
- _MYSQL@8 and up_
- _npm@10 and up_
- _composer@2 and up_
- _NodeJS@18 and up_

#

### Tech Stack

- [Vue@3](https://vuejs.org/) - Front-end Framework.
- [Laravel@11.x](https://laravel.com/docs/11.x) - Back-end Framework.

#

### Getting Started

1\. At first, you need to clone Front-end Quiz Wiz Application repository from github:

```sh
git clone git@github.com:RedberryInternship/quizwiz-front-soso-beriashvili.git
```

2\. Having done that, run _npm install_ in order to install all the JavaScript dependencies:

```sh
npm install
```

and then:

```sh
npm run dev
```

in order to build your JS/CS resources.

3\. After that you need to setup the Back-end by cloning the following repository from github:

```sh
git clone git@github.com:RedberryInternship/quizwiz-back-soso-beriashvili.git
```

4\. Next step requires you to run _composer install_ in order to install all the dependencies:

```sh
composer install
```

5\. Now set your env file. Go to the root of your Back-end project and execute the following command.

```sh
cp .env.example .env
```

And now you should provide **.env** file all the necessary Database variables:

#

**MYSQL:**

> DB_CONNECTION=mysql

> DB_HOST=127.0.0.1

> DB_PORT=3306

> DB_DATABASE=**\***

> DB_USERNAME=**\***

> DB_PASSWORD=**\***

After setting up **.env** file, execute this command in order to cache environment variables:

```sh
php artisan config:cache
```

6\. Having successfully done that, execute the following:

```sh
  php artisan key:generate
```

Which generates auth key.

#

### Migration

After successfully following the previous steps, you now need to migrate the database:

```sh
php artisan migrate
```

### Development

In order to seed the database to test the application for the development purposes. you can run:

```sh
php artisan migrate --seed
```

And to run the development server:

```sh
  php artisan serve
```

#

### And that is it for setting up the Quiz Wiz application!

#

### Resources

- [Detailed description of the project](https://redberry.gitbook.io/assignment-ii-quiz-wiz)
- [Figma design of the project](https://www.figma.com/file/QTWoxa2OYVayZ04WJ0ZZ9k/QuizWiz?type=design&node-id=1057-96995&mode=design&t=uKrcoTuQQiGVLkxI-0)
- [DrawSQL - Schema of the tables ](https://drawsql.app/teams/team-soso/diagrams/quizwizz-app)
- [POSTMAN documentation of the API ](https://documenter.getpostman.com/view/19371834/2sA3JFB4fW#e10248f4-e77f-4b64-ac33-e0210e409d2f)
