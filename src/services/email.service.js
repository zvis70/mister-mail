import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const emailService = {
    query, // בהמשך
    save,
    remove,
    getById,
    getDefaultFilter,
    createEmail
}

const STORAGE_KEY = 'emails'

_createEmails()



async function query(filterBy) {
    let emails = await storageService.query(STORAGE_KEY)
    if (filterBy) {
        var { txt, emailStatus, isRead } = filterBy
        emails = emails.filter(email => email.body.toLowerCase().includes(txt.toLowerCase())
            || email.subject.toLowerCase().includes(txt.toLowerCase()))

        if (isRead === 'Read' || isRead === 'Unread') {
            const isReadFilter = (isRead === 'Read') ? true : false
            emails = emails.filter(email => (email.isRead === isReadFilter))
        }
        return emails
    }
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}


/* function save(robotToSave) { */
function save(mailToSave) {
    if (mailToSave.id) {
        return storageService.put(STORAGE_KEY, mailToSave)
    } else {
        mailToSave.isOn = false
        return storageService.post(STORAGE_KEY, mailToSave)
    }
}

function createEmail(/* id = '',  */subject = '', body = '',isRead = false, isStarred = false,sentAt =0 ,removedAt = null, from='', to ='') {
    return {
       /*  id, */
        subject,
        body,
        isRead,
        isStarred,
        sentAt,
        removedAt,
        from,
        to
    }
}

/* 
function getDefaultFilter() {
    return {
        id: '',
        isRead:'',
        searchText: '',
        isStarred: ''
    }
}
 */


function getDefaultFilter() {
    return {
        emaiStatus: '',
        txt: '',
        isRead: ''
    }
}


 function _createEmails() {
    let emails = utilService.loadFromStorage(STORAGE_KEY)
    if (!emails || !emails.length) {

        
        emails = [
            { id: 'e101', subject: 'Miss you!', body: `In your presence, my world brightens`, 
            isRead: false, isStarred: false, sentAt: 1551133930594, removedAt: null,
            from: 'zvi.senderov@gmail.com', to: 'tzvika.s@gmail.com' },
            { id: 'e102', subject: 'Miss you!', body: `In your presence, my world brightens, 
            and in your absence, I find myself yearning for the warmth of your smile. 
            Your love is a melody that plays in the symphony of my heart, 
            creating a harmony that resonates with joy. With each beat, 
            I am reminded of the profound beauty you bring into my life. 
            I love you more than words can express.
    
            Yours always,
            Mahatma Gandhi`, isRead: true, isStarred: false, sentAt: 1551134322232, removedAt: null, 
            from: 'zvi.senderov@gmail.com', to: 'tzvika.s@gmail.com'},
            { id: 'e103', subject: 'Miss you!', body: `In your presence, my world brightens, 
            and in your absence, I find myself yearning for the warmth of your smile. 
            Your love is a melody that plays in the symphony of my heart, 
            creating a harmony that resonates with joy. With each beat, 
            I am reminded of the profound beauty you bring into my life. 
            I love you more than words can express.
    
            Yours always,
            Mahatma Gandhi`, isRead: false, isStarred: true, sentAt: 1551133938594, removedAt: null, 
            from: 'zvi.senderov@gmail.com', to: 'tzvika.s@gmail.com'},
            { id: 'e104', subject: 'Miss you!', body: `In your presence, my world brightens, 
            and in your absence, I find myself yearning for the warmth of your smile. 
            Your love is a melody that plays in the symphony of my heart, 
            creating a harmony that resonates with joy. With each beat, 
            I am reminded of the profound beauty you bring into my life. 
            I love you more than words can express.
    
            Yours always,
            Mahatma Gandhi`, isRead: true, isStarred: false, sentAt: 1551134322276, removedAt: null, 
            from: 'zvi.senderov@gmail.com', to: 'tzvika.s@gmail.com'},
            { id: 'e105', subject: 'Miss you!', body: `In your presence, my world brightens, 
            and in your absence, I find myself yearning for the warmth of your smile. 
            Your love is a melody that plays in the symphony of my heart, 
            creating a harmony that resonates with joy. With each beat, 
            I am reminded of the profound beauty you bring into my life. 
            I love you more than words can express.
    
            Yours always,
            Mahatma Gandhi`, isRead: false, isStarred: true, sentAt: 1551133930774, removedAt: null, 
            from: 'zvi.senderov@gmail.com', to: 'tzvika.s@gmail.com'},
            { id: 'e106', subject: 'Miss you!', body: `In your presence, my world brightens, 
            and in your absence, I find myself yearning for the warmth of your smile. 
            Your love is a melody that plays in the symphony of my heart, 
            creating a harmony that resonates with joy. With each beat, 
            I am reminded of the profound beauty you bring into my life. 
            I love you more than words can express.
    
            Yours always,
            Mahatma Gandhi`, isRead: false, isStarred: false, sentAt: 1551134328882, removedAt: null, 
            from: 'zvi.senderov@gmail.com', to: 'tzvika.s@gmail.com'},
            { id: 'e107', subject: 'Miss you!', body: `In your presence, my world brightens, 
            and in your absence, I find myself yearning for the warmth of your smile. 
            Your love is a melody that plays in the symphony of my heart, 
            creating a harmony that resonates with joy. With each beat, 
            I am reminded of the profound beauty you bring into my life. 
            I love you more than words can express.
    
            Yours always,
            Mahatma Gandhi`, isRead: true, isStarred: true, sentAt: 1551133939994, removedAt: null, 
            from: 'zvi.senderov@gmail.com', to: 'tzvika.s@gmail.com'},
            { id: 'e108', subject: 'Miss you!', body: `In your presence, my world brightens, 
            and in your absence, I find myself yearning for the warmth of your smile. 
            Your love is a melody that plays in the symphony of my heart, 
            creating a harmony that resonates with joy. With each beat, 
            I am reminded of the profound beauty you bring into my life. 
            I love you more than words can express.
    
            Yours always,
            Mahatma Gandhi`, isRead: true, isStarred: true, sentAt: 1551134366632, removedAt: null, 
            from: 'zvi.senderov@gmail.com', to: 'tzvika.s@gmail.com'},
            { id: 'e109', subject: 'Miss you!', body: `In your presence, my world brightens, 
            and in your absence, I find myself yearning for the warmth of your smile. 
            Your love is a melody that plays in the symphony of my heart, 
            creating a harmony that resonates with joy. With each beat, 
            I am reminded of the profound beauty you bring into my life. 
            I love you more than words can express.
    
            Yours always,
            Mahatma Gandhi`, isRead: true, isStarred: true, sentAt: 1551133540594, removedAt: null, 
            from: 'zvi.senderov@gmail.com', to: 'tzvika.s@gmail.com'},
            { id: 'e110', subject: 'Miss you!', body: `In your presence, my world brightens, 
            and in your absence, I find myself yearning for the warmth of your smile. 
            Your love is a melody that plays in the symphony of my heart, 
            creating a harmony that resonates with joy. With each beat, 
            I am reminded of the profound beauty you bring into my life. 
            I love you more than words can express.
    
            Yours always,
            Mahatma Gandhi`, isRead: false, isStarred: false, sentAt: 1551134326532, removedAt: null, 
            from: 'zvi.senderov@gmail.com', to: 'tzvika.s@gmail.com'},
            { id: 'e111', subject: 'Miss you!', body: `In your presence, my world brightens, 
            and in your absence, I find myself yearning for the warmth of your smile. 
            Your love is a melody that plays in the symphony of my heart, 
            creating a harmony that resonates with joy. With each beat, 
            I am reminded of the profound beauty you bring into my life. 
            I love you more than words can express.
    
            Yours always,
            Mahatma Gandhi`, isRead: false, isStarred: false, sentAt: 1551133930465, removedAt: null, 
            from: 'zvi.senderov@gmail.com', to: 'tzvika.s@gmail.com'},
            { id: 'e112', subject: 'Miss you!', body: `In your presence, my world brightens, 
            and in your absence, I find myself yearning for the warmth of your smile. 
            Your love is a melody that plays in the symphony of my heart, 
            creating a harmony that resonates with joy. With each beat, 
            I am reminded of the profound beauty you bring into my life. 
            I love you more than words can express.
    
            Yours always,
            Mahatma Gandhi`, isRead: false, isStarred: false, sentAt: 1551134322255, removedAt: null, 
            from: 'zvi.senderov@gmail.com', to: 'tzvika.s@gmail.com'},
    
        ]
        utilService.saveToStorage(STORAGE_KEY, emails)
    }
}
 

// function _createEmails() {
//     let emails = utilService.loadFromStorage(STORAGE_KEY)

//     if (!emails || !emails.length) {

//         const emailBodylong = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

//         emails = [
//             {
//                 id: 'e101', subject: 'Plans for tomorrow', body: 'emailBodylong',
//                 isRead: false, isStarred: false, sentAt: 1651133930594, removedAt: null,
//                 from: 'roni@gmail.com', to: 'saritgalanos@misteremail.com'
//             },

//             {
//                 id: 'e102', subject: 'My next vacation', body: 'I would like to take a vacation for Christmas ',
//                 isRead: false, isStarred: false, sentAt: 1701133930594, removedAt: null,
//                 from: 'shiri@momo.com', to: 'saritgalanos@misteremail.com'
//             },
//             {
//                 id: 'e103', subject: 'Your yearly bonus', body: 'It is time for your yearly bonus, please come to my office',
//                 isRead: false, isStarred: false, sentAt: 1701283930594, removedAt: null,
//                 from: 'dan@momo.com', to: 'saritgalanos@misteremail.com'
//             },
//             {
//                 id: 'e104', subject: 'Plans for tomorrow', body: 'emailBodylong',
//                 isRead: false, isStarred: false, sentAt: 1701833930594, removedAt: null,
//                 from: 'roni@gmail.com', to: 'saritgalanos@misteremail.com'
//             },
//             {
//                 id: 'e105', subject: 'Plans for tomorrow', body: 'emailBodylong',
//                 isRead: false, isStarred: false, sentAt: 1701933930594, removedAt: null,
//                 from: 'roni@gmail.com', to: 'saritgalanos@misteremail.com'
//             },

//             {
//                 id: 'e106', subject: 'My next vacation', body: 'I would like to take a vacation for Christmas ',
//                 isRead: false, isStarred: false, sentAt: 1702133930594, removedAt: null,
//                 from: 'shiri@momo.com', to: 'saritgalanos@misteremail.com'
//             },
//             {
//                 id: 'e107', subject: 'Your yearly bonus', body: 'It is time for your yearly bonus, please come to my office',
//                 isRead: false, isStarred: false, sentAt: 1702233930594, removedAt: null,
//                 from: 'daniel@momo.com', to: 'saritgalanos@misteremail.com'
//             },
//             {
//                 id: 'e108', subject: 'Plans for tomorrow', body: 'emailBodylong',
//                 isRead: false, isStarred: false, sentAt: 1702234930594, removedAt: null,
//                 from: 'roni@gmail.com', to: 'saritgalanos@misteremail.com'
//             }

//         ]
//         utilService.saveToStorage(STORAGE_KEY, emails)
//     }
// }



