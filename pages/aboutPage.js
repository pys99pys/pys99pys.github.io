const AboutPage = () => {
  return `
    <div class="content">
      <div class="about-page">
        <div class="profile">
          <h1>프론트엔드 개발자 박윤서</h1>
          <small>Frontend Developer Park Youn Seo</small>
          <p>
            개발을 좋아하고, 코딩하는것을 즐거워하는 프론트엔드 개발자입니다.<br />
            좋은 기술을 잘 사용하여 개발자와 사용자가 모두 만족할 수 있는 소프트웨어를 만들었을 때 가장 큰 보람을 느낍니다.<br />
            최근에는 유지보수 하기 좋은 컴포넌트를 만드는 것과 성능 최적화에 많은 노력을 기울이고 있습니다.
          </p>
        </div>
        <div class="skill">
          <h2>보유 기술</h2>
          <dl>
            <dt>Frontend</dt>
            <dd>
              ES6, Typescript, React, Vue.js, Unit test, Storybook, Bootstrap, Ant design, SASS
            </dd>
          </dl>
          <dl>
            <dt>Backend</dt>
            <dd>
              Node.js, Express, Koa, Typeorm, PHP, Laravel
            </dd>
          </dl>
          <dl>
            <dt>Database</dt>
            <dd>
              Mysql, MongoDB
            </dd>
          </dl>
        </div>
        <div class="project">
          <h2>진행했던 주요 프로젝트</h2>
          <section>
            <div class="title">
              <h3>샵 어드민 통합</h3>
              <span>카닥</span>
              <time>2020.1 ~ ing</time>
            </div>
            <div class="item">
              <p>
                서비스별로 분리되어 있던 샵 어드민을 통합한 작업입니다. React v16.7에 도입된 hooks를 다양하게 커스텀하여 재사용성을 극대화 했습니다.
              </p>
              <ul>
                <li>Typescript</li>
                <li>React</li>
                <li>Context API</li>
                <li>Custom react hooks</li>
                <li>Bootstrap</li>
                <li>Styled-component</li>
                <li>Storybook</li>
                <li>Jest + React-testing-library</li>
                <li>Sendbird SDK</li>
              </ul>
            </div>
          </section>
          <section>
            <div class="title">
              <h3>자동차검사 서비스</h3>
              <span>카닥</span>
              <time>2019.7 ~ 2019.10</time>
            </div>
            <div class="item">
              <p>
                자동차검사 대행 서비스의 웹뷰 부분 프론트엔드 작업을 담당했습니다.
              </p>
              <ul>
                <li>React</li>
                <li>Custom react hooks</li>
                <li>SASS</li>
              </ul>
            </div>
          </section>
          <section>
            <div class="title">
              <h3>루나소프트 CTI</h3>
              <span>루나소프트</span>
              <time>2019.1 ~ 2019.4</time>
            </div>
            <div class="item">
              <p>
                컴퓨터 전화 통합 시스템의 상담원 화면 프론트엔드 작업의 전체를 담당했습니다. Socket.io를 사용하여 실시간성 작업들을 처리했습니다.
              </p>
              <ul>
                <li>Vue.js</li>
                <li>Vuex</li>
                <li>Bootstrap</li>
                <li>SASS</li>
                <li>Socket.io</li>
              </ul>
            </div>
          </section>
          <section>
            <div class="title">
              <h3>루나소프트 상담톡</h3>
              <span>루나소프트</span>
              <time>2018.4 ~ 2018.10</time>
            </div>
            <div class="item">
              <p>
                루나소프트 상담톡 서비스의 상담원 채팅 화면과 어드민 툴을 작업했습니다. Socket.io를 사용한 채팅 시스템 구현 등 프론트엔드 전체를 담당했으며, 일부 백엔드 작업에도 참여했습니다.
              </p>
              <ul>
                <li>Vue.js</li>
                <li>Vuex</li>
                <li>Bootstrap</li>
                <li>SASS</li>
                <li>Socket.io</li>
                <li>Laravel</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
};

export default AboutPage;
