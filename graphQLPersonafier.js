User : {
    id : (parent) => parent.id,
    v : (parent) => parent.v,
    anonymousId : (parent) => parent.anonymousId,
    createdAt : (parent) => parent.createdAt,
    email : (parent) => parent.email,
    firstName : (parent) => parent.firstName,
    lastName : (parent) => parent.lastName,
    phoneNumber : (parent) => parent.phoneNumber,
    userId : (parent) => parent.userId,
    traits : (parent) => parent.traits,
    updatedAt : (parent) => parent.updatedAt,
    username : (parent) => parent.username,
    profilePhoto : (parent) => parent.profilePhoto,
    segmenters : (parent) => parent.segmenters,
},
Segmenter : {
    id : (parent) => parent.id,
    v : (parent) => parent.v,
    createdAt : (parent) => parent.createdAt,
    firstName : (parent) => parent.firstName,
    internalTeam : (parent) => parent.internalTeam,
    jobRole : (parent) => parent.jobRole,
    lastName : (parent) => parent.lastName,
    userId : (parent) => parent.userId,
    myUsers : (parent) => parent.myUsers,
    phoneNumber : (parent) => parent.phoneNumber,
    pronouns : (parent) => parent.pronouns,
    region : (parent) => parent.region,
    segmentEmail : (parent) => parent.segmentEmail,
    slackName : (parent) => parent.slackName,
    team : (parent) => parent.team,
    twilioEmail : (parent) => parent.twilioEmail,
    updatedAt : (parent) => parent.updatedAt,
    workspaceId : (parent) => parent.workspaceId,
    workspaceSlug : (parent) => parent.workspaceSlug,
},
Profilephoto : {
    id: (parent) => parent.id,
    v: (parent) => parent.v,
    alt_description: (parent) => parent.alt_description,
    blur_hash: (parent) => parent.blur_hash,
    color: (parent) => parent.color,
    height: (parent) => parent.height,
    id_: (parent) => parent.id_,
    links: (parent) => parent.links,
    links_download: (parent) => parent.links_download,
    links_download_location: (parent) => parent.links_download_location,
    links_html: (parent) => parent.links_html,
    links_self: (parent) => parent.links_self,
    urls: (parent) => parent.urls,
    urls_full: (parent) => parent.urls_full,
    urls_raw: (parent) => parent.urls_raw,
    urls_regular: (parent) => parent.urls_regular,
    urls_small: (parent) => parent.urls_small,
    urls_small_s3: (parent) => parent.urls_small_s3,
    urls_thumb: (parent) => parent.urls_thumb,
    users: (parent) => parent.users,
    width: (parent) => parent.width,
    model: (parent) => parent.model,
}
// feed: () => links,
// feed: async (parent, args, context) => {
//     return context.prisma.link.findMany()
// },
},
//   Link: {
//     id: (parent) => parent.id,
//     description: (parent) => parent.description,
//     url: (parent) => parent.url,
//   }
Mutation: {
// createLink was previously "post"
createLink:(parent, args, context, info) => {
    // let idCount = links.length
    const newLink = context.prisma.link.create({
        data: {
            url: args.url,
            description: args.description,
        },
    })
    return newLink
},

createSegmenter:(parent, args, context, info) => {
    const newSegmenter = context.prisma.segmenter.create({
        data: {
            id : args.id,
            firstName: args.firstName,
            lastName: args.lastName,
            slackName: args.slackName,
            segmentEmail: args.segmentEmail,
            twilioEmail: args.twilioEmail,
            internalTeam: args.internalTeam,
            team: args.team,
            workspaceSlug: args.workspaceSlug,
            workspaceId: args.workspaceId,
            preferredPronouns: args.preferredPronouns,
            phoneNumber: args.phoneNumber,
            jobRole: args.jobRole,
            region: args.region,
        },
    })
    return newSegmenter
},

createUser:(parent, args, context, info) => {
    const newUser = context.prisma.user.create({
        data: {
            id : args.id,
            userId : args.userId,
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email,
            username: args.username,
            phoneNumber: args.phoneNumber,
            username: args.username,
            profilephoto: args.profilephoto,
            segmenters: args.segmenters,
            traits: {
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                username: args.username,
                phoneNumber: args.phoneNumber,
                username: args.username,
                profilephoto: args.profilephoto,
                segmenters: args.segmenters,
            }
        },
    })
    return newUser
},

createProfilePhoto:(parent, args, context, info) => {
    const newProfilePhoto = context.prisma.profilephoto.create({
        data: {
            id : args.id,
            alt_description : args.alt_description,
            blur_hash : args.blur_hash,
            color : args.color,
            height : args.height,
            id_ : args.id,
            links : args.links,
            links_download : args.links_download,
            links_html : args.links_html,
            links_self : args.links_self,
            urls : args.urls,
            urls_full : args.urls_full,
            urls_raw : args.urls_raw,
            urls_regular : args.urls_regular,
            urls_small : args.urls_small,
            urls_small_s3 : args.urls_small_s3,
            urls_thumb : args.urls_thumb,
            width : args.width,
        },
    })
    return newProfilePhoto
},
},
}


// schema.graphql BELOW

// LINK data
type Query {
    info: String!
    feed: [Link!]!
    link(id:ID!): Link
  }
  
  type Mutation {
      post(url: String!, description: String!): Link!
      createLink(url: String!, description: String!): Link!
      updateLink(id: ID!, url: String, description: String): Link
      deleteLink(id: ID!): Link
  }
  
  type Link {
    id: ID!
    description: String!
    url: String!
  }


// # // Data source: Tells Prisma you'll be using SQLite for your database connection.
datasource db {
    provider = "sqlite"
    url = "file:./dev.db"
}

// # // Generator: Indicates that you want to generate Prisma Client.
generator client {
    provider = "prisma-client-js"
}

// # // Data model: Here, we have written out our Link as a model.
model Link {
    id              Int     @id @default(autoincrement())
    createdAt       Date    @default(now())
    description     String
    url             String
}


// personafier data
model Segmenter {
    id              String    @id
    firstName       String
    slackName       String
    segmentEmail    String
    twilioEmail     String
    internalTeam    String
    team            String
    workspaceSlug   String
    workspaceId     String
    pronouns        String
    phoneNumber     String
    jobRole         String
    region          String
    myUsers         [User!]!      @relation(fields: [userId], references: [id])
    createdAt       Date        @default(now())
    updatedAt       Date        @updatedAt
}

model User {
    id              String      @id
    userId          String
    anonymousId     Type[]
    firstName       String
    lastName        String
    email           String
    username        String
    phoneNumber     String
    profilePhoto    String
    traits          Object
    pinned          Boolean     @default(false)
    segmenters      [Segmenter!]! @relation(fields: [id], references: [id])
    createdAt       Date        @default(now())
    updatedAt       Date        @updatedAt
}

model ProfilePhoto {
    id                      String      @id
    alt_description         String
    blur_hash               String
    color                   String
    height                  Int
    links                   Object
    links_download          String
    links_download_location String
    links_html              String
    links_self              String
    urls                    Object
    urls_full               String
    urls_raw                String
    urls_regular            String
    urls_small              String
    urls_small_s3           String
    urls_thumb              String
    width                   Int
    users                   [User!]!      @relation(fields: [userId], references: [id])
    createdAt               Date        @default(now())
    updatedAt               Date        @updatedAt
}



// schema.prisma BELOW

// Whenever you make changes to your Prisma schema in the future, you manually need to invoke prisma generate in order to accommodate the changes in your Prisma Client API.
// prisma generate

generator client {
    provider = "prisma-client-js"
  }
  
  datasource db {
    provider = "mongodb"
    url      = env("DATABASE_URL")
    relationMode = "prisma"
  }
  
  type ProfilephotoLinks {
    download          String
    download_location String
    html              String
    self              String
  }
  
  type ProfilephotoUrls {
    full     String
    raw      String
    regular  String
    small    String
    small_s3 String
    thumb    String
  }
  
  // type UserTraits {
  //   id              String?            
  //   email           String?        
  //   firstName       String?
  //   lastName        String?
  //   phoneNumber     String?
  //   userId          String?         
  //   username        String?
  // }
  
  model Profilephoto {
    id                      String              @id @map("_id") @db.ObjectId
    v                       Int                 @map("__v")
    alt_description         String
    blur_hash               String
    color                   String
    height                  Int
    id_                     String              @map("id") @db.ObjectId
    links                   ProfilephotoLinks[]
    links_download          String
    links_download_location String
    links_html              String
    links_self              String
    urls                    ProfilephotoUrls[]
    urls_full               String
    urls_raw                String
    urls_regular            String
    urls_small              String
    urls_small_s3           String
    urls_thumb              String
    //users                   User?          
    users                   User[]          
    width                   Int
  }
  
  model Segmenter {
    id            String          @id @default(auto()) @map("_id") @db.ObjectId
    v             Int             @map("__v")
    createdAt     DateTime        @db.Date
    firstName     String
    internalTeam  String
    jobRole       String?
    lastName      String
    userId        String?          @unique @map("id") @db.ObjectId
    myUsers       UserSegment[]   
    // myUsers       User[]          @relation(fields: [id], references:[id])
    phoneNumber   String?
    pronouns      String?
    region        String?
    segmentEmail  String          @unique
    slackName     String          @unique
    team          String
    twilioEmail   String          @unique
    updatedAt     DateTime        @db.Date
    workspaceId   String?         @unique
    workspaceSlug String          @unique
  }
  
  model User {
    id              String        @id @default(auto()) @map("_id") @db.ObjectId
    v               Int?          @map("__v")
    anonymousId     String[]    
    createdAt       DateTime?     @db.Date
    email           String        @unique
    firstName       String
    lastName        String
    phoneNumber     String
    userId          String?        @unique @map("id") @db.ObjectId
    // profilePhoto    Profilephoto @relation(fields: [userId], references: [id])
    profilePhoto    Profilephoto  @relation(fields: [id], references: [id])
    segmenters      UserSegment[]  
    // segmenters      Segmenter[]   @relation(fields: [id], references:[id])
    // traits          UserTraits?
    updatedAt       DateTime      @db.Date
    username        String
  }
  
  model UserSegment {
    id                String    @id @default(auto()) @map("_id") @db.ObjectId
    segmenterId       String    @db.ObjectId    
    segmenter         Segmenter @relation(fields: [segmenterId], references:[id])
  
    userUserId        String    @db.ObjectId
    user              User      @relation(fields:[userUserId], references:[id])
  }