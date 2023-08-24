import {createClient} from "next-sanity";
import groq from "groq";
import {Project} from "@/types/Project";
import {GeneralInformationType} from "@/types/GeneralInformationType";
import {BiroulExecutivType} from "@/types/BiroulExecutivType";
import {MedicalWorkers} from "@/types/MedicalWorkers";
import {FirstThreeArticle} from "@/types/Article";

const client = createClient({
    projectId: 'cys4a6ni',
    dataset: 'production',
    apiVersion: "2023-08-14",
})

export async function getProject(): Promise<Project[]>{

    return client.fetch(groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "imageUrl": image.asset->url,
        url,
    }`);
 }

 export async function getGeneralInformarion(): Promise<GeneralInformationType>{
    return client.fetch(
        groq`*[_type == "generalinfo" ][0]{
                        title,
                        content
                }`
    )
 }
 export async function GetBiroulExecutiv(): Promise<BiroulExecutivType[]>{
    return client.fetch(
        groq`*[_type == "executivbirou" ]
        {
         _id ,
        "firstName" : prenume,
        "lastName" : nume,
        "workPositionName" :functia,
        contact,
        }`
    )
 }
 export async function ComisiaDentologieLitigii(): Promise<BiroulExecutivType[]>{
    return client.fetch(
        groq`*[_type == "comision" ]
        {
         _id ,
        "firstName" : prenume,
        "lastName" : nume,
        "workPositionName" :functia,
        contact,
        }`
    )
 }

 export async function GetMedicalWorkers():Promise<MedicalWorkers[]>{
    return client.fetch(groq`*[_type == "medicalworker"]{
    _id,
    "nume":nume,
    "prenume":prenume,
    "medicalCodFromCMV":medcod,
    "diploNumber":diplom,
    "startDate":launchAt,
    "statut":status,
    }`)
 }

 export async function GetFirstTreeArticles(): Promise<FirstThreeArticle[]>
 {
     return client.fetch(groq`
     *[_type == "article"]|order(_createdAt) [0...3]{
        _id,
        title,
        content
     }
     `)
 }
 export async function GetAllArticles()
 {
     return client.fetch(groq`
     *[_type == "article"]|order(_createdAt) {
        _id,
        title,
        content
     }
     `)
 }
