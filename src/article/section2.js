import React from 'react'
import styles from './article.module.scss'
import imagePasswordChanged from '../resources/section2/password-changed.jpeg'

import imageGVNVideos from '../resources/section2/gvn-videos.jpeg'
import imageGVNVideoExample from '../resources/section2/gvn-video-example.jpeg'
import imageGVNPassport from '../resources/section2/gvn-passport.jpeg'
import imageGVNEmail from '../resources/section2/gvn-email.jpg'
import imageHUECEmail from '../resources/section2/huec-email.jpeg'

import imageAGVDisk from '../resources/section2/agv-disk.jpeg'
import imageKMRDisk from '../resources/section2/kmr-disk.jpeg'
import imageKMRPhotos from '../resources/section2/kmr-photos.jpeg'
import imageDMNPhotos from '../resources/section2/dmn-photos.jpeg'
import imageSTKDeletion from '../resources/section2/stk-deletion.jpg'
import imagePasswordChange from '../resources/section2/password-change.jpg'

import imageGRSRegistration from '../resources/section2/grs-registration.jpg'
import imageGNGRegistration from '../resources/section2/gng-registration.jpeg'
import imageSMNRegistration from '../resources/section2/smn-registration.jpeg'
import imagePPVRegistration from '../resources/section2/ppv-registration.jpeg'

import imageDMNInstagram from '../resources/section2/dmn-instagram.jpeg'
import imageDMNDrive from '../resources/section2/dmn-drive.jpeg'
import imageNVKEmail from '../resources/section2/nvk-email.jpeg'
import imageSMREmail from '../resources/section2/smr-email.png'
import imageSMLEmail from '../resources/section2/sml-email.jpeg'

import imageChatMembers from '../resources/section2/chat-members.jpeg'
import imageChat1 from '../resources/section2/chat1.jpeg'
import imageChat2 from '../resources/section2/chat2.jpeg'

import imageFNSDrive from '../resources/section2/fns-drive.jpeg'
import imageKTLDrive from '../resources/section2/ktl-drive.jpeg'
import imageKEMcons from '../resources/section2/kem-cons.jpeg'
import imageAccountsLogOut from '../resources/section3/accounts-log-out.jpg'

import Image from '../image'

export default function Section2() {
  return (
    <section id='hack'>
      <div className={styles.heading}>
        <span /><h3>Взлом</h3><span />
      </div>
      <p>
        Взломом это назвать трудно: я просто подставил тот самый стандартный пароль <code>12345678</code>, который
        изначально был выдан Марковым. Дело в том, что 8 месяцев назад, зимой 2020, пароли были сброшены. Я думаю, это
        было приурочено к началу дистанционного обучения на карантине.
      </p>
      <p>
        <b>UPD Jul 2021:</b> Марков объяснил сброс тем, что «не мог за 6 часов разослать всем пароли». Ну да, а
        постановление от директора или справку он за 10 минут может разослать.
      </p>
      <Image src={imagePasswordChanged} label='В течение 12 месяцев Google пишет дату изменения пароля при попытке его ввода' />
      <p>
        Забавно, что я обнаружил это, пытаясь войти в свой же собственный аккаунт. Видимо, некоторые ученики догадались
        сменить пароль раньше меня, потому что к нескольким аккаунтам стандартный пароль не подошел.
      </p>
      <p>
        Вот еще несколько примеров «взломанных» мной аккаунтов. На Google-диске старшеклассника Виктора Р. я
        нашел многочасовые видео-ролики с демонстрацией неизвестного мне компьютерного проекта. Возможно, он
        продемонстрировал там закрытый код, и кто-то мог этот код скопировать и навредить Виктору.
      </p>
      <Image src={imageGVNVideos} />
      <Image src={imageGVNVideoExample} label='Одно из видео на диске' />
      <p>
        А вот кое-что поинтереснее: на диске Виктора я нашел данные из его паспорта и подпись. Это анкета участника ВООШ.
      </p>
      <Image src={imageGVNPassport} label='В соответствии со ст. 1. ФЗ «О персональных данных», подпись — не биометрические данные' />
      <p>
        Это скриншот почты Виктора. Оттуда можно отправить письмо, посмотреть отправленные документы. Я, например, узнал
        куда собирается поступать Виктор и какими сайтами он пользуется.
      </p>
      <Image src={imageGVNEmail} />
      <p>
        А это почта друга Виктора, Тимофея. Можно
        использовать все эти аккаунты со стандартным паролем для массовых бот-атак для регистрации на сайтах, почтового спама
        накрутки статистики под видео на YouTube, накрутки отзывов в Play Market и в других сервисах.
      </p>
      <Image src={imageHUECEmail} />
      <p>
        Я пробовал найти почты других пользователей через Moodle, который переполнен багами и критическими уязвимостями
        (читайте мою
        статью <a href='https://awfulsamlitwebsite.utidteam.com' target='_blank' rel='noreferrer'>100 причин почему у
        школы СамЛИТ плохой вебсайт</a>),
        но в итоге решил сделать это через поиск внутри организации в почте Gmail (в поле получателя письма).
        Также пароль от аккаунта не поменяли Ваня А. и Дарья К. — мои одноклассники.
      </p>
      <Image src={imageAGVDisk} />
      <Image src={imageKMRDisk} />
      <p>
        На диске Дарьи я нашел альбом фотографий с другими людьми. Этих фотографий я более нигде не видел, поэтому могу
        предположить, что они были загружены на диск для хранения.
      </p>
      <Image src={imageKMRPhotos} />
      <p>
        Дарья — не единственная, кто хранил фотографии на диске. Вот еще один альбом фотографий Марии Д.
      </p>
      <Image src={imageDMNPhotos} />
      <p>
        Но я пишу эту статью не для того, чтобы показывать вам размытые картинки случайных людей. Вместо того, чтобы
        смотреть эти фотографии я могу просто взять и удалить аккаунт целиком. Если бы у аккаунта Елизаветы С.
        была включена двухэтапная аутентификация, ей бы пришлось ввести код из СМСки, прежде чем удалять аккаунт.
      </p>
      <Image src={imageSTKDeletion} />
      <p>
        А могу поменять пароль. Обратите внимание, что Google просит не ставить простые пароли. Но Марков, видимо,
        прочитал лишь часть про минимальную длину в 8 символов.
      </p>
      <Image src={imagePasswordChange} />
      <p>
        Ниже доказательство, что эти гугл-аккаунты лишь тратят бюджет школы и никому не нужны. Георгий Г.,
        Мария Г., Кирилл Се., Макар П., и, скорее всего, многие другие за 3 года ни разу не зашли в свой аккаунт.
      </p>
      <Image src={imageGRSRegistration} />
      <Image src={imageGNGRegistration} />
      <Image src={imageSMNRegistration} />
      <Image src={imagePPVRegistration} />
      <p>
        Я смог получить доступ и к другим аккаунтам и проверял сервис Google Drive от имени этих аккаунтов.
      </p>
      <Image src={imageDMNDrive} label='Личные файлы Марии Д.'/>
      <Image src={imageFNSDrive} label='Забавные тесты Матвея Ф.'/>
      <Image src={imageKTLDrive} label='Диск Вадима К.'/>
      <p>
        Также я смог войти в почты этих аккаунтов, но показать их содержимое не могу, потому что опасаюсь статьи 272, а
        именно о копировании (распространении) персональной информации. Но там ничего интересного нет :)
      </p>
      <Image src={imageDMNInstagram} label='Смена почты у удаленного инстаграм-аккаунта Марии Д.'/>
      <Image src={imageNVKEmail} label='Владимир Н.'/>
      <Image src={imageSMLEmail} label='Артём С.'/>
      <Image src={imageKEMcons} label='7 заявлений с личными данными учеников' />
      <Image src={imageSMREmail} label='Кирилл См.'/>
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
