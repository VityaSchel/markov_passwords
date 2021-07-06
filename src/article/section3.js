import React from 'react'
import styles from './article.module.scss'
import globalStyles from '../App.module.scss'

import imageLoginMail from '../resources/section3/login-mail.jpeg'
import imageCaptcha from '../resources/section3/captcha.jpeg'

import Image from '../image'
import Poll from '../poll'

export default function Section3() {
  return (
    <section id='protection'>
      <div className={styles.heading}>
        <span /><h3>Защита</h3><span />
      </div>
      <p>
        Сам Google предпринял все возможные меры защиты от взлома аккаунта со стандартным паролем: при каждом входе мне
        приходилось дважды вводить капчу и пароль.
      </p>
      <Image src={imageCaptcha} />
      <p>
        После входа владельцу аккаунта приходило письмо. Впрочем, в отличии от похожей системы в мессенджере Телеграм,
        я мог запросто его удалить.
      </p>
      <Image src={imageLoginMail} />
      <p>
        Если вы не Марков, а пользователь такого аккаунта, я рекомендую немедленно сменить пароль, а если на аккаунте
        хранятся важные данные, включить двухэтапную аутентификацию. Но как же можно было защитить аккаунты, будучи
        Марковым?
      </p>
      <ol>
        <li>
          <div className={globalStyles.marker} />
          <div>
            <b>Лучшим решением здесь является установка случайного пароля</b>, отличного от паролей других пользователей
            при сбросе администратором
          </div>
        </li>
        <li>
          <div className={globalStyles.marker} />
          <div>
            <b>Другая мера защиты — случайное число или текст на конце почтового адреса.</b> Я смог подобрать логины, вводя
            комбинации фамилии и имени учеников, не зная при этом их настоящей почты. Возможно в настройках организации можно
            выключить поиск по участникам.
          </div>
        </li>
        <li>
          <div className={globalStyles.marker} />
          <div>
            <b>Еще одно предложение: не использовать аккаунты гугл вообще.</b> А зачем они? Почта сейчас есть у каждого ученика, лично меня никто не
            заставлял пользоваться почтой СамЛИТа при участии в конкурсах. Для этого, конечно, нужно начать
            предоставлять доступ по ftp.
          </div>
        </li>
      </ol>
      <p>
        Подведем итог: эти люди, скорее всего, меняли пароль после создания гугл-аккаунта (по крайней мере я точно менял),
        но 8 месяцев назад <b>Марков</b> сбросил пароли.
      </p>
      <p>
        В конце прошу вас проголосовать в этом опросе. Также благодарю всех, кто поддерживал и поддерживает меня, после того,
        как Марков сказал, что будет писать заявление на меня, за помощь, наверное :)
      </p>
      <div className={styles.poll}><Poll /></div>
      <p>На этом все, спасибо. С любовью, Виктор. 2021</p>
    </section>
  )
}
