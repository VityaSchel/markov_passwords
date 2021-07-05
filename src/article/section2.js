import React from 'react'
import styles from './article.module.scss'
import imagePasswordChanged from '../resources/section2/password-changed.jpeg'

import imageGovnonenkoVideos from '../resources/section2/govnonenko-videos.jpeg'
import imageGovnonenkoVideoExample from '../resources/section2/govnonenko-video-example.jpeg'
import imageGovnonenkoPassport from '../resources/section2/govnonenko-passport.jpeg'
import imageGovnonenkoEmail from '../resources/section2/govnonenko-email.jpg'
import imageHuetsEmail from '../resources/section2/huets-email.jpeg'

import imageAgeevDisk from '../resources/section2/ageev-disk.jpeg'
import imageKomarovaDisk from '../resources/section2/komarova-disk.jpeg'
import imageKomarovaPhotos from '../resources/section2/komarova-photos.jpeg'
import imageDeminaPhotos from '../resources/section2/demina-photos.jpeg'
import imageStukalinaDeletion from '../resources/section2/stukalina-deletion.jpg'
import imagePasswordChange from '../resources/section2/password-change.jpg'

import imageGirshovskyRegistration from '../resources/section2/girshovsky-registration.jpg'
import imageGengutRegistration from '../resources/section2/gengut-registration.jpeg'
import imageSemenovRegistration from '../resources/section2/semenov-registration.jpeg'
import imagePopovichRegistration from '../resources/section2/popovich-registration.jpeg'

import imageDeminaInstagram from '../resources/section2/demina-instagram.jpeg'
import imageDeminaDrive from '../resources/section2/demina-drive.jpeg'
import imageNovikovEmail from '../resources/section2/novikov-email.jpeg'
import imageSmirnovEmail from '../resources/section2/smirnov-email.png'
import imageSmolenkovEmail from '../resources/section2/smolenkov-email.jpeg'

import imageChatMembers from '../resources/section2/chat-members.jpeg'
import imageChat1 from '../resources/section2/chat1.jpeg'
import imageChat2 from '../resources/section2/chat2.jpeg'

import imageFainshteinDrive from '../resources/section2/fainshtein-drive.jpeg'
import imageKEMcons from '../resources/section2/kem-cons.jpeg'
import imageAccountsLogOut from '../resources/section3/accounts-log-out.jpg'

import Image from '../image'

export default function Section2() {
  return (
    <section>
      <div className={styles.heading}>
        <span /><h3>Взлом</h3><span />
      </div>
      <p>
        Взломом это назвать трудно: я просто подставил тот самый стандартный пароль <code>12345678</code>, который
        изначально был выдан Марковым. Дело в том, что 8 месяцев назад, зимой 2020, пароли были сброшены. Я думаю, это
        было приурочено к началу дистанционного обучения на карантине.
      </p>
      <Image src={imagePasswordChanged} label='В течение 12 месяцев Google пишет дату изменения пароля при попытке его ввода' />
      <p>
        Забавно, что я обнаружил это, пытаясь войти в свой же собственный аккаунт. Видимо, некоторые ученики догадались
        сменить пароль раньше меня, потому что к нескольким аккаунтам стандартный пароль не подошел.
      </p>
      <p>
        Вот еще несколько примеров «взломанных» мной аккаунтов. На Google-диске старшеклассника Виктора Романенко я
        нашел многочасовые видео-ролики с демонстрацией неизвестного мне компьютерного проекта. Возможно, он
        продемонстрировал там закрытый код, и кто-то мог этот код скопировать и навредить Виктору.
      </p>
      <Image src={imageGovnonenkoVideos} label='В течение 12 месяцев Google пишет дату изменения пароля при попытке его ввода' />
      <Image src={imageGovnonenkoVideoExample} label='Одно из видео на диске' />
      <p>
        А вот кое-что поинтереснее: на диске Виктора я нашел данные из его паспорта и подпись. Это анкета участника ВООШ.
      </p>
      <Image src={imageGovnonenkoPassport} label='В соответствии со ст. 1. ФЗ «О персональных данных», подпись — не биометрические данные' />
      <p>
        Это скриншот почты Виктора. Оттуда можно отправить письмо, посмотреть отправленные документы. Я, например, узнал
        куда собирается поступать Виктор и какими сайтами он пользуется.
      </p>
      <Image src={imageGovnonenkoEmail} />
      <p>
        А это почта друга Виктора, Тимофея. Еще можно
        использовать все эти аккаунты со стандартным паролем для массовых бот-атак для регистрации на сайтах, почтового спама
        накрутки статистики под видео на YouTube, накрутки отзывов в Play Market и в других сервисах.
      </p>
      <Image src={imageHuetsEmail} />
      <p>
        Я пробовал найти почты других пользователей через Moodle, который переполнен багами и критическими уязвимостями
        (читайте мою
        статью <a href='https://awfulsamlitwebsite.utidteam.com' target='_blank' rel='noreferrer'>100 причин почему у
        школы СамЛИТ плохой вебсайт</a>),
        но в итоге решил сделать это через поиск внутри организации в почте Gmail (в поле получателя письма).
        Также пароль от аккаунта не поменяли Ваня Агеев и Дарья Комарова — мои одноклассники.
      </p>
      <Image src={imageAgeevDisk} />
      <Image src={imageKomarovaDisk} />
      <p>
        На диске Дарьи я нашел альбом фотографий с другими людьми. Этих фотографий я более нигде не видел, поэтому могу
        предположить, что они были загружены на диск для хранения.
      </p>
      <Image src={imageKomarovaPhotos} />
      <p>
        Кстати, Дарья — не единственная, кто хранил фотографии на диске. Вот еще один альбом семейных фотографий Марии
        Дёминой
      </p>
      <Image src={imageDeminaPhotos} />
      <p>
        Но я пишу эту статью не для того, чтобы показывать вам размытые картинки случайных людей. Вместо того, чтобы
        смотреть эти фотографии я могу просто взять и удалить аккаунт целиком. Если бы у аккаунта Елизаветы Стукалиной
        была включена двухэтапная аутентификация, ей бы пришлось ввести код из СМСки, прежде чем удалять аккаунт.
      </p>
      <Image src={imageStukalinaDeletion} />
      <p>
        А могу поменять пароль. Обратите внимание, что Google просит не ставить простые пароли. Но Марков, видимо,
        прочитал лишь часть про минимальную длину в 8 символов.
      </p>
      <Image src={imagePasswordChange} />
      <p>
        Ниже доказательство, что эти гугл-аккаунты лишь тратят бюджет школы и никому не нужны. Георгий Гиршовский,
        Мария Генгут, Кирилл Семенов, Попович Макар, и, скорее всего, многие другие за 3 года ни разу не зашли в свой аккаунт.
      </p>
      <Image src={imageGirshovskyRegistration} />
      <Image src={imageGengutRegistration} />
      <Image src={imageSemenovRegistration} />
      <Image src={imagePopovichRegistration} />
      <p>
        Я смог получить доступ и к другим аккаунтам и проверял сервис Google Drive от имени этих аккаунтов.
      </p>
      <Image src={imageDeminaDrive} label='Личные файлы Марии Дёминой'/>
      <Image src={imageFainshteinDrive} label='Забавные тесты Матвея Файнштейна'/>
      <p>
        Также я смог войти в почты этих аккаунтов, но показать их содержимое не могу, потому что опасаюсь статьи 272, а
        именно о копировании (распространении) персональной информации. Но там ничего интересного нет :)
      </p>
      <Image src={imageDeminaInstagram} label='Смена почты у удаленного инстаграм-аккаунта Марии Дёминой'/>
      <Image src={imageNovikovEmail} label='Владимир Новиков'/>
      <Image src={imageSmolenkovEmail} label='Артём Смоленков'/>
      <Image src={imageKEMcons} label='7 заявлений с личными данными учеников' />
      <Image src={imageSmirnovEmail} label='Кирилл Смирнов'/>
      <p>
        На последнем скриншоте я заметил беседу 7А в Hangouts. Она была создана еще когда нам раздавали бумажки с логинами
        и паролями от аккаунтов. Тогда же нам объясняли, что в Gmail можно переписываться.
      </p>
      <Image src={imageChat2} />
      <Image src={imageChat1} />
      <Image src={imageChatMembers} />
      <p>
        А дальше мне надоело «взламывать» аккаунты. Я надеюсь, что на момент публикации этой статьи для всех учеников,
        Марков, которому я скину текст заранее, уже сбросит пароли. У себя же на компьютере я удалил все данные для входа
        и вышел из аккаунтов:
      </p>
      <Image src={imageAccountsLogOut} />
    </section>
  )
}
