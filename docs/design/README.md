## Проєктування бази даних

# модель бізнес-об'єктів 

@startuml

    entity MediaContent

    entity MediaContentAnalysisTask
    entity MediaContentAnalysisTask.status #ffffff
    entity MediaContentAnalysisTask.title #ffffff
    entity MediaContentAnalysisTask.analyst #ffffff
    entity MediaContentAnalysisTask.deadline #ffffff
    entity MediaContentAnalysisTask.ID #ffffff

    entity MediaPaymentData #ffffff
    entity MediaPaymentData.email #ffffff
    entity MediaPaymentData.cardNumber #ffffff
    entity MediaPaymentData.cardExpireDate #ffffff
    entity MediaPaymentData.cardCVV #ffffff

    entity MediaReview
    entity MediaReview.text #ffffff
    entity MediaReview.rate #ffffff

    entity MediaUser
    entity MediaUser.login #ffffff
    entity MediaUser.password #ffffff
    entity MediaUser.email #ffffff
    entity MediaUser.picture #ffffff
    entity MediaUser.role #ffffff

    entity MediaMember 

    MediaUser.login --r-* MediaUser
    MediaUser.password --u-* MediaUser
    MediaUser.email --u-* MediaUser
    MediaUser.picture --l-* MediaUser
    MediaUser.role --u-* MediaUser

    MediaMember "0,*" -- "1,1" MediaUser
    MediaMember "0,*" -- "1,1" MediaContent

    MediaContent.title --d-*  MediaContent
    MediaContent.description --d-*  MediaContent
    MediaContent.status --d-*  MediaContent
    MediaContentAnalysisTask "0,*" -- "1,1"  MediaContent
    MediaContentAnalysisTask.status --u-*  MediaContentAnalysisTask
    MediaContentAnalysisTask.title --d-*  MediaContentAnalysisTask
    MediaContentAnalysisTask.analyst --r-*  MediaContentAnalysisTask
    MediaContentAnalysisTask.deadline --d-*  MediaContentAnalysisTask
    MediaContentAnalysisTask.ID --u-*  MediaContentAnalysisTask

    MediaPaymentData "0,*" --u- "1,1" MediaContent
    MediaPaymentData.email --l-* MediaPaymentData
    MediaPaymentData.cardNumber --r-* MediaPaymentData
    MediaPaymentData.cardExpireDate --u-* MediaPaymentData
    MediaPaymentData.cardCVV --u-* MediaPaymentData

    MediaReview  "0,*" --u- "1,1" MediaContent
    MediaReview.text --u-* MediaReview
    MediaReview.rate --u-* MediaReview

@enduml


# ER-модель

@startuml

    package ProjectManagment {
        entity ProjectMember {
            ID: UUID
        }

        entity Project {
            ID: UUID
            name: TEXT
            description: TEXT
            status: TEXT
        }

        entity Task {
            ID: UUID
            name: TEXT
            developer: TEXT
            status: TEXT
            deadline: DATE
        }

        entity PaymentData {
            ID: UUID
            cardNumber: NUMBER
            cardCVV: NUMBER
            cardExpireDate: DATE
            email: TEXT
        }

        entity Review {
            ID: UUID
            text: TEXT
            rate: NUMBER
        }
    }

    package AccessPolicy {
        entity Member {
            ID: UUID
        }
    }

    package UserProfile {
        entity User {
            ID: UUID
            LOGIN: TEXT
            PICTURE: BYTE
            PASSWORD: BYTE
            EMAIL: TEXT
            ROLE: TEXT
        }
    }

    ProjectManagment.Project "1.1" <-- "0." ProjectManagment.ProjectMember
    ProjectManagment.Project "1.1" <-- "0." ProjectManagment.Task
    ProjectManagment.Project "1.1" <-- "0.*" ProjectManagment.PaymentData
    ProjectManagment.Project "1.1" <-- "0.*" ProjectManagment.Review

    UserProfile.User "1.1" <-- "0." AccessPolicy.Member

    AccessPolicy.Member "1.1" <-- "0.*" ProjectManagment.ProjectMember

@enduml




- реляційна схема

