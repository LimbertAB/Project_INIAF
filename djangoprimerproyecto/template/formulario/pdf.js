var styles= {
    tableExample: {
        margin: [0, 2, 0, 2]
    },
    tableHeader: {
        bold: true,
        fontSize: 7,
        color: 'black',
        fillColor: '#dddddd'
    },
    tableHeadercenter:{
        bold: true,
        fontSize: 7,
        color: 'black',
        fillColor: '#dddddd',
        alignment: 'center'
    },
    tablebody:{
        fontSize: 7,
        alignment: 'left'
    },
    tablebodycenter:{ 
        fontSize: 7,
        alignment: 'center'
    },
    italico:{
        fontSize: 9,
        color:'#313131',
        italics:true,
    },
}
        
var esfm='data:image/jpeg;base64,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';
var logo='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAQDAwQDAwQEAwQFBAQFBgoHBgYGBg0JCggKDw0QEA8NDw4RExgUERIXEg4PFRwVFxkZGxsbEBQdHx0aHxgaGxr/2wBDAQQFBQYFBgwHBwwaEQ8RGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhr/wAARCAB9AZADASIAAhEBAxEB/8QAHQAAAgIDAQEBAAAAAAAAAAAAAAUEBgMHCAIBCf/EAE8QAAEDAwMBBQYBCAYGBgsAAAECAwQABREGEiExBxMiQVEUMmFxgZGhCBUjNEJVYrEWUnLB0fAkMzVFc6IXGIKS0vE2VmN1lKOys9Ph4v/EABsBAQACAwEBAAAAAAAAAAAAAAABAgMFBgcE/8QANREAAQMDAwIDBgUDBQAAAAAAAQACEQMEIQUSMUFRBiJhE3GBkaHwFDKxwdFCUmIWVJLi8f/aAAwDAQACEQMRAD8A7+ooooiKKKKIiiivmQKIvtFRlzmUL2FQ3ZqQlQUMikQi+0V5UoJGSeKxIltOK2pWCaIs9FFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURFFYJTpaZUodQK18x2mxWry5a7iFRJKVYSF+64MEgpV8kn4+FXpVgCVEq53q6otMN19z3UJKifgK0PfPyntNWyY/CfujEd9Hk6FJB9cHGOOhHUVtHVV5abhB9/BiEfpF59wHzPwrRPaJoCwa0tz6rnBYuC0DYEu8LbP8AA4PEny6H5+lfVSY0/mCwvLuiX6W7aGdba/S41ckuWmC34Gm3QO9fKuVFHvEIA4yMZVnyGOmUaugN20SA8kpCcnxCvyzufZBcYl/mf9G94ZeMV4pDMq4NRHgM8FLiihDiTjjGFZB8OACbfpXtp1dpFdzs2tY0iNOssF2UFupye9CP0G9J42KcU1gp4O4euaoz2VRu4FWh7eMrsfW/5Q2m9NSHoF2v9stkxABUw8/udRkZG5CApSeD0IFar0h+UVahqqc5I1vb7hDlKR7LES062Wf63iU2M5wPM9D61xv2f6Wd7TNTzn73MkvOHfLkuBJWp5ZOTuX+zknqfWun+zLQdvsd6jxbfDgsw+7UZC3MKk7sjA3Y5T16/Cp2tGxxHJRxgloOV2ppbVsXUMVDsV1DgUAfCrPH+RVn3ZrUtqv8K2NNhj9IS53DO05U4voUj7H/ALpPQZq8KvqYMFLsxSUqIHyzWN7M4VmnGVYyM0VRNOa/j6muDjNsBejtDxyB7hJ6BJ/a459OR61eUncKxEQrr1UGXK7pxKAcEnr9KnUkuZxLZ+Z/lUtElQUzhv8AftBXrUilll/VU0zPQ1B5QJHcLo8mT7Jb2g9JKSvaVBPA+fzpTN1TKtDsVi6xu4kS1bWEbgrerIGOPPxD71kbacGtm3Oe7EVwZ+qawQERtWyC9d07ZWnL1I2HgBQG4Izx7u1aT/abHpWUADkYVclMDc7nECnrlDDEYKAKu9SepwOAfU1IevDrz4j29sPPlBc27gPDkDz+dV1F2kal7PnLg4kpXImrLScYIaTMIbyPXYlNSLCy6jVSVrB2fm9Y+u9ukQCSMhJ4Ttq9bEvplJDbzHDicg44z1+tQn75cI8Q3BcNSoGwOd4hQUdh5zjrSWew8bhqAgHCljb/ANxNMJV/d0ro2yTDEXMQluM0+2k+IIKACR5Ejg48+nFNoxCSpFv1K9doq51vaS7CbJC3N4GCBk/zqcu9942wmKkOPPcNpyBnj1+lQIFqtkLTF3c02R7HcEvSkJSfClSmwCEjHAynp5EkcdKT2xh5MywFQOErOc/2DQBpn0SSFaY91fbf7i4NBl0o3gbgfD9KivXefKU5+a4hcabOFOrUEpB+tRb024rUzSkZ2+xgHH9pVL2272izTm40K26hgnePza8vu1qyfEgqUCjHU4UPPrjoAEApJTtq5XKMEruMUJYJA7xCwtPOPT+dSJNwlvbk21gPLSASCoJ69OtVpqzxxpZqQuBL0q+2hWy2onEtJVk4R3aVd2Qo89AefLmpF7tTkqwKUhbjTvd9UKKTmkAlJKmpk6k3821IT/x0f41NXenIbTvtyA042AVDIOPrSm+xH39DQI6HXUvbIoUpKyFHBTnJFYb5alR9NuhsqW4Wzkk5J+tAA6JTI4TNyXqBSgWLclTZwQS+j+Walx589jZ+c44ZC1YHjCufpS7V8J+dY4DUfTzWo1peQpUd2b7KGxsUO83YOSOmP4vhSeFbJUVUZx3T7VhQCUlDc0SN5IyPIdMH70EEdEkgqxvXS4SlO/miMJAaXsX+kSnB6+fzrEibf2/E9bCUjqEuoJx96+aObW2bt3gPilZGfTYKrXZfGszWlpq9C2pNjnOH9NFlvuvhLgztJKlZKSPMfH0pGDjhOquJ1A2YaXgPEogYPGD0xXlF1kxpDTdyZDHek7PGDnHy+dU5TE381NomJUmWJCS8P4t3P+ftVi1c045crKWs4Sp3OPkmp2gEDukypsy+uqkGLbI6pUgDKgnGE/MngVhMm/tELXbw4nzSh1JI/Gsem3Ay5cojjgamuO942VdSnaAMeuCD96p/Z9o/VNi1I7Mvz59k7laXlqlbxIVwQrH3OTg0AGeMfVRJ+a2Parsi5NnAUhxJIWhQwUnzBHkaaVVbU4mZqC4yYnijKKUhY6LUEgE/5/lVqrE4QrjKKWXS4mGG0NDc66oIQnOMk9BTOqrqRta7nZygHAmNk/LdRuShXr2nUXef7NTt8v06P8azw76vvjHuMdcWQBnavz+R6H6VT+0XSepL7qixzdNOmMzGRtdfEgI2HeD06nirDqdxEm5W9iKoLkM94pzbztSQOCfj/dWWGkDj+FWSFLeudxlharRFEhtC9hPeJTz9T8aGJd6RuXMhJabSCVHvUnAH1rFpJpxFruCXEb1KlOYSTjd4U8Zqp26xzWmVg6DjWZW0/pUXgPFHHXG3moEZH3+qZ5Wz4j4kMpcHQis9LrMf9Ba/simNYjgqwRUV6Y23kFQB+dSSMitY9pUO7MxFTbHIcalM8pRnKHR5pUk+vqMEeuMgy0SUWLWnaa1o6Sn89ICLc8djclCs7V/1VJ6jpwRnoenGdC9vN9hIsrmobU73F0hOIDLyQArPepSW1cZKFZwR0Oeawy+1Zm+sSrHqdpli+xmk+0MBWUOkp5U0DyUdfp1rm7UUq4utXWzvPH81xZylxlpJVlCHNwQfhkfhVK9dlBkk84+K3Gm6ZXv6pawZA3e8ffwXX3Z32vW7tB0uUOFKHw1hxpZz1H4itN6v7SFaOvMmE/uVC3BLTmVKPdkElB452n3T6EjrnNZ7J7A4dU2pUVp9m1uhUh3aCnc0Pex6gnjNWvXvZxLTqZpDj0e52Oc2pTTjsgR1LCeVMlavAlRB6k9ApWDjbWib4hpOqfhGuitz7xmfSRGR2yPTprnQbGyvwa5mkWE9YDugxmD0+vrUbrPsNomM3p1p2XbLs2sPIiSCTHdRw24lI8ODvUcLJz5EY5qnb9edNXWx6EZ0M46ZMiA67dIyXu+wQ4e5CzzheO8UW9xSjfwBklW1Jrdm1DaYtos4iPXBqQ6lMeNHDKUISnxNJUrCyQAQHD4/Q4xVG08/A07cZ49nVGWqO8Gkst9640tYOEk+Q8WD58VuLTfdMqPtjgZ2nB7YHaZj3HsuDuqzLKoynWGe4/c/Jam0H2lzdCboxgIkw1ulbqNxbWo8ZG7046V0JoO9K1Pdot8tzy4ZvB7hxySvukQY7aHHFndj/wBl73yx6VSUaYtGoGrld7xEjqkxXWlbllW5xayRyCrCumfFWzWF2K4RLVAszrXfpZC1KQ0hMqOd4HetqV4VFIIT3fHhUdpHiNZ7p7LGo0XGSDtxJAMB3PHB+4VbeL9pdREdc4MSRx7wtodmOoEyrhKmXnu2RFcVHisjgMtJ8PIPurUUng8gBI9arH5Qnbw1bYTlosjv+lPJKS4nqynGdw/ixyPTrTbTEBy56OgxJqPzfbba06xE7tW9yc/k5kKPmgqO71Uec468s6sszoMr88pWmY667ES4oEhC+i+fMjP41p6+u2tS6faUXS9n5j+w9e/bjnjqtC0P8bQq3FU/lHlHc/fHc+nPaeidS2Ds907vLzbLSU9664lBO48ArOBkkkj41t3Rmrl6liCcWTHiOcx96gVLT5KwDgA9Rz05+FcC9n95duOp2m9SKK4MCEBECif0ru9vK1Jzzwkn51vu1dqE273Fux9n6Y76oykolPqOW2gQfCnBG5Q8JI8hn5VuWVWV2b28HhaW+sKthXdRqZLeT0z9/wALrRt1Lg8JzSe6frbP1/kax6VhvxLa0mW+7JeIytx0jcpXrgcD5Disl0/W2fr/ACNSBBWvUmy/qqflTOlll/VU/KmdVdygS6daWpp3LylXTKTg0sGkYgKynckrPiwo+L5+tWTOaxOSG2hlawKkOI4SAk8XTMaLtS2CEA8IB8P2/GpMuysysE5QoDGUnBxUpFwjqOEupz86kpUFDKTmpLnSkJfHtLLDSkAZCupPU1EOmoy1HfuUj+qTx8OKdkgdaxLkNo6rSKjc5ISRGlYjbm5rchPmlKiAfXimD9pZeYS3jG0cEcEUreuU+e9IasoZWpjG/vFlPXPp8q8on3S29yq9JYQh50NJ7twq8RBPmPgaudx65UYTSHZmYhJGVnHVRJqJO0xGluFwbkLPVSTg/enLb6FJB3DkVk3DyNU3OBUxKr0TScWO6lxe51aehWScU8XHQtnuiPDjFe+9QP2hXoKB6GhcSgACTt6fYbe35URngFRx9qYvxG32S0sZSRisqnUI95QFfEvtq6LB+tJJTAVce0ew64V988CfIOGpsKwNRMeNbmORuUTTrrXlSgnqQKne4pASiTp9iQ5vytHOcJURUb+icNOCyktHAyUHGRTwyWgffT969JcQv3VA03FICgCzs9x3SsqBHU9axxbEzGd35Us+W4k4psVAdaxmS0DysVElIS65WCJch+nbBI8/Sln9Douf0rjjiM5KVLJH2qxuSEJbKwQcD1qtybhIdkRlPAs210LK5IV4W8BWMny5GMmrNLoUGE/hxI8JsIYCUgdMVLrXUK/x5QnCFdTNks59nYQ2UKd+IB69TwPSrZbZ7+5LE9Aaf2BRTuzgH5fKoLSEBBTjFRJ0Buc3td+hHlXidc2YKNzihz0HmTSlrVjTz2xLL2c+bZ/woGnkKSQsStGR1KJU68QfIuHFNbdYYluRtYbSPXFTo74fRuGR8DWUrSnqoULnFICRT9MsTVFW9beTkhKiOaxRtKtRlAh51WPVwmrD3yP6wr6FpV0INNzlEBeGGUsNhCOgrLRRVFZFJ9Rttrtb/eAHwnrTiq/rBSk2WTs67DVm/mUFfm72uojL7SJjYJQ4kIT3yD7qiNwGf+0KqMb262zZDF6JW28RtWrn+EK+pSafa8YJ15eW5spl1Up9S0tpcC3GQEpCd3zAHFUXTTjqWRJyp9lzwOtL52jPGB9a5a43VKlR/r+69r0RoZb2e3+18/T5rvLQlukWPRlkfcbD7T0YSHAlHibLp3qx8OenPStTflB6ztUK1P2mySe7vKnI7oYDeUOIUpRyn0IKMEHyWMeeN+aWiuWrTVrjwXhOZjxGmlNk8jagDg/SuMe0N1q+dvM785lDUZNxShaVK7pKWm0jg46e7yfWvJPCFo3U9dfVeTDCXiOT5hGF5vr96+jSd7Pl5I+Geistm03bbxdbAyy8GJEs+1XF+DJ7wtIAG4YIyheRtGSeoNb3iaY7O7fHQxCscxLaRwC9kk/E+fzqudkEHTOn06nv8p1j2OM43Gjlt8PBYDSVKIUoD9sjJOAPxpLP1+nW0+TFiXh2wR47iUIfiMIc79SSSSpaT4RhJwFBIUK9R1TWdWt7oUNPfFMARuGYPmggTEboAGIbPC+CwsbCrQNS8p7nk5g4kY/aZ9VadU6O0de7PJj260yIlwLZ9nkFzOxflkDqOK5k1g5GsDCxYUSRN2oamPSEpRsWCchKR5AkDn0rrqzX9lpxKrili5WgjHt0UDegjhW9A68gnjBx5GtE9tdj0+NQ6kdg3EPJloZehNMIzuUtA3lR/ZAUFcYzkitj4Z1TU9Sq1LfU37h/SG588gCREwJmeBEla7W7aztGMr2DNh4JJ/pjp0/mVuLsz1hZL3Y2n4Ej26bGZZQ9tRwlxTaVFCAemM4J9QQPWq1+UBbX2NO226SUMsM+0OMqbKPdDmHCf7RLWcmqL+SLcFsXrUMdpoyQ7EacCcZIUFEZz5cKP4VtX8o2Ip3QaZM5xLjsWY28mMnp0Uj6+8K8XuLVuleKG0GE7ZHP+Q4+Zhdx4bvDdvoVaoyTBn3wuSmkXG5SpMhC3I0FLeVKTwdg42/Xfn6CugPySW4i7lcktoKMPIJB+I4P1wftXMjiXl6ghomPKxKK1Lbz4UYTkcevHWuhfyXO/Gsrg/HcaXFWhptTbbgy0pJXjcnrzk817TZE07hnr2+S3niJoqadXc/n2nX3A/p0+C/QNlIS2kJ6Y8qT3T9bZ+v8jTeOSWUZ9KUXT9bZ+v8AI10I5XlBUmy/qqflTOlll/VU/KmdQeUCT327otUUq5U4rhCUjJJPQAeZpXG01JuIEi/yXQVciMyvalI9FKHJPyx9eteZGJmsoTTuShltb4GOCoYAz98/Sl/aTe7jDXYLLZZJgSL3NDC5aQMstjG7bn9o5GPrisoBw0KpIiSna9F2rb/o6ZMdfktuU4SPookfcVBD87TMppq4Pe1QXlbWn8YIP9VXofj5/CqXLtFy7Mrqi8P3663i0KUEqjLmgvKyfNDmQ55e7tV51sK8vM3vR8yS2h5tDkRTzQeZU2tKkjcnKFAEHIFDIiTIKgQeiwTbpJuc1Fvs6glwp3uOkZS2n1Pr16V7/ochxJ9ouk9Th6qQtKQPkNtJuyp0zbbcpr2S8qUGST/VShJH/wBZqT2h3K4R2bbb7RKXCenOq3voxuCEgZAJ6ElQ5+BpB37GqcRJUjSGl52nLleVS5onRZZZVHWRtWnG8KSodPMc+efKlna9cVWuxWySk4Kbkgf/ACnaz9nlxuLirpbLtLXPXBU2pp9w5WUrCvCT54KDyfXrSft4/wDRK3/+8kf/AGnaloPthuUH8mFaPzEhiL7bIu8plhDXeLJKQlIxknpSaHqqRMs0+5W9p1yBFOO8V7xT6/QYJ9M1A7WXbijTFrRHBFqcUkTnEHxjgbBj+rnOfiE0zgG7MStNRdIQ4MnRbkVXtkh1Y7wEg/s5HJ48jyVA4qwHlkpOYU20R4+p4TVxt92lBtXCkJKfAodUnj/zzUVWqFxJkm1xg5Lltvd02njcs48/8/Gq32dqUzrm8xtMEu6c5LqlnhKh7m0/PcPikZplodhMntC1tKdwpUSQhlr+HeCVH5+EfjUuaAXT0CgGQFZG9MTZo7y73R5C1c91FwkJ+G4g5+wr0rRymhugXaa04OhdKXE/bAP4isfaBdJttsrSLU8YsmZKRGS8BkoBBUSM8Zwkj60htd6umlIrqLm+7ekLIU0p57C0HnI3YOR0+VYwHubIKsYBT+LeZdtkKg3pKQ8lO5DiTlLifUZ/zmvLLFx1HueTKMGDuIQUpytzB5PPQdfWk8rULWpWmVuxBEVHWVBZeC/CRyOg+H2qIxI1vcUNo0sqFGtzYCG35beEkDjjGSfnirbTHZRKtP8AQmOcFdyuSlevfJ/8NY39PybSy5JgXV1SWklakSynbgfxDGOPWqVL7Ib5qC9NXfUOqVNSkLQrMJlSSkJxwglXg6Z6fHzpx2z3F+JpdmNHWpAmSktukHqgJUrH1KR+NIlwaHTKcCYU223e46tQRalJjRUYS5JWkkZ9EjzNNf6GtKGX7pcVuHqUuJSPoNtMNM21uz6ft0JkABphAUR5qIyo/Ukn61Q71Kv131TcGoF2et8W3qQlltkgBStoJKuPFycYPHwqBLnQ3AU8DKe3Ow3a2RHXbRMcuCEpJLDoHeKH8KhwT8MVWZDTWp7ZY2Yc/vZ6gtQt7ij3S8blHdtxtOB1z58Y60+X2huxnEMv20LcAAUtMgAE/LFJrfbVXy/vi2SVWpat8hS2vEtCVHCgk+R8RwfKrt3AebCqYJgLFd4z95jJ7zTyNOs23HtEsjKkYPRoJxvHQ56dfPmmS7g6q8Q4dhkLurrkROHnF84GcqWfLHHx+tS5vZzHhQ3nLFcJkN5TZ9oDrpdRK8yXAf2viMfKo/ZOpq4Qrlc0pG9T4YHHQJSFfzX+FC4FhISM5UudZNRN3GGu1riSXwCtyRNB7hn4JbSd619epSB8+ji92W83SEw3EvyrdJQD3xYjANvH5ElaPov70r7RLpcI0e2wbPKVCfnPKC3kDxBCRyAfI5I56157PLjcXRdLdd5a57kFbam3nPf2LB4J88FJ5681j8xbvVsTCwMaje0+hyDeUbJrYBGCVB0eSk+ucU1bsd0uKA7cZ64e8ZDLCQSn5qPn9KV9pENC5+jpY4cRfWGVfFCskj7oT+NQtTX/AFhL1e/ZNFohoZhxW3pDj6QSVLJwMk9OOBj15qwBcJbhRxyrH/Q5z99Tv+T/AAry9Z7rakF+3Tlzko5Uw6kBSh8FDjPwx9apUu+9pGmlxJ9/RbpFqEplqUltI3BC1hGRgjnxDHxxW3/nVXlzeoKkQUvst0RdIaHkHO4ZpkRmqhovekTkKGEplOhI+G81b6xuEOVgZCKQavJFlk4H7Bp/Sy/R/aba+jHVNG4chX5ZatjwpeutQuSwqJK9tcQFEcKA4CgfiADS2zQG/Y0OwVpS8kFDqTylWOP7qsXamifpntVvsOdHUqDLWmRHWpGU7SkA/ZQIquvziu6SZMVgKYBSVPRgR4ihKlZSf4iquYvW1G13tPvXvPh+5tqllbuY3gQcdcfwcruSA2qNBivx3XbNIW0lTiVN72VEj8K4cnuT7h2gXuVNPtL/ALbJXJcQnhKis8/AZOK6t0Z2myL9o6I7b5Zky2WxHcjezbl70pHx6Y5z5VUO0uJB7PrJeG7k1DauN7UJEt9pvwPrKytK0E9OvT13ce7u4DwNVq6PqjjWZMuaJ7eb58cLy3xJpVS7puYTBaHfHGFWuz1q2TbZLjXRbCViRuR36leHwjlKc4B497r8RV1t2kbc4ZbIkR7w6ttS0oyVFoDqrGcH61ovULahcLZeblHRCtrzqFvIiDCe4CwlRAyfMHr5mt1atk6Ba05eoPZ1b0W/VV2dRYHY633SlvcpKle+VD9j3h12+fWu91rSTU1Krcuq7Q4yRgx3E5GDgrk9OuqhtmUw0HYPUE9seq1Nfb03ap70i1TlxNr+UGO4W1KUjyIScI6jnB59M0temKnJElbq3g5vKVL643Ef3f4VWdQaZlaY9vj3VTKpCY5IabXlaP0zaQojy3BXHng+VXJpf9H7NaI81uG3EUWkhbm0rCkqy4MjkArWv5iuk8PihZ1PxjXbgAfj3jviTHWFqtRZdXLRbVG7S4j9f/B8VP8AyYp1xha8fZhymYaHba4l8uJzgBSMceu7H41vbtpYUNCSXWO9nSXH2krlOo2pSN2eB9Kj2HTzVinI1pYobSPzogx5Dgj71KO7epzYBwjhOT1z6gZqvdvPaC4bRBsipqX3ZKxJUhhjBCBkJ+5Px92vDtSdU1LxDRrU2QPLz6ZP2SvXfDWnvtKrKcgw6fh9+q54nW1hNxiJdfHfq3OOuZwcYxj4da3T+SumNE7Q7kxb0KW25GbW46RxuCsAf8x+1aciTkRWpxlsIadXs2d6CtxafEVfLkI+1b3/ACPo069amv12fYLUNKmYzGRjxJ3KXx/20fevVtND3Vx2C6HxXWtm6dUBHme7GO0T7uPiu9WP9Uj5Uoun62z9f5GnLY2tpHwpNdP1tn6/yNdAOV42VJsv6qn5UzpZZf1VPypnUHlAqhqALtV2h3dCVLaaJS8lIySg8Ej5cH6VM1Jpy361tTCHnloLbiZMOXGXhbLg91aT/d/+qbzvZ1MqTJxtPrVLLDtpeWqw3Ex21KyplXjQTnrg9PpWQSYI5VTjlIE2G6wdYKt7d69uvC4HtaJchgAgbynaM7tvTy+1SWRe3FyYV+1DJiSy0rMN2KgIeTg+44DzkcetM8yH7qLq5JYaniL7KFto6I3FXQ55yaywWmoinSpTLr76SlyS4St0g/xE8dfKsxcYVYC86CWm1TJlsd8CZJEhjPRRxhQ+eEpP3p5q7TB1LDYTHlmDMjOd4w9s3jpgpI8wf5gfIwJ8W3y47YQ93TzZyhxKsKSr1BqF+fL9ET3bMuFKA6LfZO7/AJVAVjIJO4KcAQnOkNKr00xKVKmGfOlrCnndmxOB7qQnJ4GT5+f0qudssb85WS3wWuX1S++Cf4UtrBP3WPvUlOpNQueFbtsbB/aQyvI+6zUmFFjuOrk3aX7XKWnG5eOB6AdAPhUjcH73JgiArDGai33T7LUhtL8SXFSlaD5gp5Hz/lWoXhetJIn6NiKW/wC3rAgr8yhec4Plnor0wT55q7EybQtw2KchDK1biy6nejPwHUevFY3L1dHpDMl1q0rksBQacLCypAV1wd+RnA+1SyW+oUOyrJpHTLGlLKxAjgLd9+Q7jHeOHqfl5D4AVR9JzRa9caglPEJt94k4Q7+zvQSEHPooE/Pim6510uoLVwnsx46uFojI2bh6ZJJpmqJaVwPZVd2UYxg4qMid3VTgxCYap0+NS2pUQSFRHkrDrLyU7tix0JHmOSD8/Kl2n9Gewsvf0hfZvTzhG3vI42NgeiSTyfM/KliZFytI7u2XRDrCfcbkJ3gfXr9M0G63yd4H7hGiIJ59mawfuon+6oDXBsA4UyJS/tBESLGTbtPQozEpP6R9TDSUFCccJOB55zj4VsmIWjEY9kx7P3ae629NuOMfSqrAg2uJHWhbgcW5yta1blKPqT51AD02z5RZp7ZjZyll9O9KfPjzH3oRuEBAYyq7rDQuudUankMm99zph9xG1LUlTRQzxuQUJ95XXqfTkdBb+0vTTupdNLah4MuK4JDIJxvIBBTn+yT9QKg/0n1Hng2nH/Bc/wDyV9Mu43cd1dZ7LUc++1HRsCvmSSfpmreeQeyrhONB3xN509EDh2zIraWZDZ6hQGN2PRWM/ceVLL5oOXPvj9xtN3/N7cvb7S0WN/IGMpORjIA8jzzRJtcJCkP22WqHKQMJcaVtPy+I4HFY/wA+6gZGxMyE+Om9xg7vwIH4VUAh0sU4IgqyL0/Y4cXvJVvhKQw2N77zCCrAHUnHJ461TtEuGVrS5S22BHiuxVdw2EbQEb0Y48uKmhl66rQq/XHv20HKWUAIRn1IHX5mpstmM2tp+2SvZZDQIStOOnofXy/CgEAg8lMEhWuYN0SQPVpX8q1h2SuKsrTltmfo0S8PME9CvACh88AfY05Ei5ygtmfeAuOsYUlLaEEp9MgVNkwbVIhJYKkjb7qgcEGgG1paeqk5MqZrDTCtTwmER5ZgzIzveMPbN46YKSM9CD69cfKvmj9LL0zGkmXMM6bKWFPO7NiQAMJSBk9OfufhSQXG9W7CIlzZlNJ90Skbz9wQT9TXw3K93DKJNyYiNq6iK3tP3JJH0ptdt2zhJEyo2u7l7dqvSlpiHemLdGZcpQPCSOEJP/eJx8qhXDUcDTnaRf03pMpEafbo7YeZaUrBG7I8IyPe6/Cnbdst8JDTsZxCpLTgdClnJKuuSfOvq9TXsLOz82lP/CX/AOOrCOIVSqXbUoV2Y3pLDsp6GNQNiKqSpRX3PtTOzlXPSmEmwtSJb12lNyZZcubzTzqri8gJ/wBMLKG0IScDajBxTq4zrjfIoi3F2GhnvEOFLTZG4pUFDOVHjIHpXoNsvXH2xy3WdUorCy97Md27PBzu6/GrSefvp/CiAn+lWURm32W87W3VpG45OAT96stK7PGDLa18bnFFZ29MmmZOK+ZxkrKF9rw6gOIUk9DXuiqqVyN+U12UyZ7BvtiSPzjEQopbKch5PUoPx44NcZvru7yUSoaEwnUkJeHGMZ5yPga/V/WVkbvlnkxXCtAcbUjeg4UnI6g+Rrh7VvZhGu12lsaGbeCobym5dwJUWg4FHcgqV/rnMg5I6eav2T81za+3ipTjd+q6/QtdFiw21y53s+kf0+vf5LW/Zz2ljsyuEufd8vPuFsMyWGyUtq8XBx9/ikLHnU28aoRrue7etUsrbsEFZVAtjqy33zqj6gZ2AnOOuBVWvfZ7e/a37aw9DU2p5AeDcgoZLwJCUrBATv8AEfPjPlmqzP0zfLTqOVp9tLL0+Eypb3su57uwlOdo+OeMD1rQ1dKaX+0d5X/p0Mdu0rYXN5b17l1QPlh95P1/dXyDKt7ynra423cJUvallSz3acE+JJHmMHHljr5Ukvtiuv5yltupYmbZwfX3qkpUFhTiihRBAUCXFcp+mBxWOZpa6af7OoN8nRH0yritK3ZG07o7J5Rk/sg4T6e/z5Ve9QR4lnZtNqslwkPJltl2dHktbHELbbG1wjGQFErPyFdW66pNdQtbsne/AImMRycwI4AGXdRJnzy5sDWr1X6YIYMwY9fd19cDocKttWd+632bqS7MxBMa2vrZYVsQgZACgM8npjbnHXyr17Tpu/XGQi6Ndza31FtkIeUDGV5OBzz28jnqM4rLq1UW5dnjF5cuMuVfPaG2JCWUHu2gN6UtEge8QEEdTxUXXHZ5eoVr07d7fbX4z10WlqVGQwVqQ6tOR4E+mFA/Tzr4xXpXVg+jZEsa3ynkcRx3E5BgYx3n7bK0FrqG7Upc7pEYOefhyAec9ou+nu22X2eQJdj1V3kpCU+zMyg2Q28xjwoGBkJzyrzIGPOtZXm5XK5XC5XG2OIjtvSFqbakD9KkZ4B/i6cVX7NpS8ajkXSOwzGTIs6VLkBx8I2IHVQJ42+ec1sDTOgtQXi6LakvNtTXgXTIeUp510H3lpB4PJ55z08iCdFS0oUnE0hJ69vgOk/qu907ULa1qufWq7WkYImfpyq5aYl9lTIdtjRESrnOcCVLXg7SepJ8kp/ur9Eewbs2a0PpphpSi6+vLjzpTje4epwOny9K0J2Xdmtth3yJadRx5MG+ry5HlIdWn2oJ5UWnR8vE2cfIjk9q22MIsRttIwAK31vbC2bJjce36Lntc1l2pvbTpk+ybwDHPfCnUjun62z9f5GnlJLp+ts/M/yr6W8rmSpFl/VU/KmdLLL+qppnUO5QJRc2VlW8MofGMbHOlI1NOE/7Fgn6U3uctap0eE0vu1vbvFt3Ywknp9Kr7U+S5cEQ+9kIWphx7DsQtrWEkeFCSfEf8KyN4VTypHdOY/2LB+xr73Lh/wBywftUVm6d/dRbTPdZfUgLQHIakq90qIUCRggD61jgX1yfCmzIUoOssEpZ3N7VPqSjesAZ4wPnV4KjCndy5+5YP2NfO5c/csH7VDiX1M1NrxcAzJuTa1R2iwSk4JGCoHjp6V7jXvLluYuEwRZs8BTDPdFWBnA3HyyRTITCk9w4P9ywfsa+hl0/7lg/Y14TeXZbslgrW0uMytxfdtd6o7SAQAOvWvqLm/DD63nytDUdmQAtotqw4opwoE+EjH/lUZReu4d/csH7GjunP3LB+1eJGoSGIbqHABKlCMnw5wTjn8awszJUl3CJEg5nOwwWYKnUpKFbSpZB8A+dMxlFJ7lz9ywftR3Lv7lg/Y1GgXCXOejsomNBb3tWDsyn9AtKDznod2axR9Qy3JFsiOjuZM0u70qT/qg2tSV5+W0mpgphTu4d/csH7GvncufuWD9qwG+uCbNjvPpTHiMB9UgIyFNqxtKRnzz+BrEL936JC7ZMTKDTTa0ju8KytYRtIJ4OTUQfuUkKZ3Ln7lgfavvcO/uWD9jS+Zfu4F0aizhJnWxpTslnuSlO1Pv7Vfw5qbc7jMshnGW4FsR2EvIcCMBzxbSOvBBP8qnKYXvuHf3LB+xr77O7+5IP2NYZF8fhxrfJdcSoSloQ4gDllSwFJB+Ypuq7JaTJQSFLZUUk49KqZU4S3unP3LB+1fO5cP8AuWD9qjy7sUuBlmen25cL2xEdTOApGCcbs9cA1manSGozMpx2Q4lxhDwIiHuxuAON+cedSoXvuXP3LB+xo7pz9ywftXlE9+c2l5px9IVJEfDMQvYOAdyiD4U89TUBWokRo6n7rPEZn2tyM0pDRXvLZwpX9mmSmEx7h39ywfsaO5d/csH7Ghy8P25t/wBtWnezL9mIA6+ALBz8lCsEu9utx3X2ngtaYXtga2dWwrarBz5daZRZ+4cP+5YP2NHcO/uSD9jUK4X962xZDzjvePRwwHmQ3ylboJCevlx96ctXB2HKjtSHUPB7KSU/sLHvIPyzQypwq5qC8s6ct70242iC1HZTuWopPhH2Na0d/KD0u2ohEK2LA8xu/wAKbflQ3SRb+z2c5CcU06VNYUhRSf8AWozyPhXGemkW693BEe7XL80NkBPtHc70JX6K8QwPjz/fXwahVu7O2/FUqYcwc8kj5Z+nulb3RWaHXufYatUfSB/K8Rtn+0jaTPr8F1l/1htM/u+2/j/hWeL+ULpdTyQuHbWh/W54/CtQDsE3AKTqNJBAIIh9f+evv/QGf/WJP/wn/wDdeenx/a/4/J69L/0l4U/3tT/j/wBF2dpO6s3i2NS4qkrZeSHGynptPI+mKsFa27H2FQtNRoanO99lQGQvGM7eM4+nStk16S1we0OHUSvHajWtqOa3gEgL1RRRUqixuNhxBSrzrXmutFTL5b1xLLM/Njj7iQ7JQjLiWyfHsPksjIB8s5rY9fCkGpBhFpif2H2d6xswIkRDDbKcNBAIKfju65OTk9Tk5qr6G/JqtdgvV2uMxpp924rRvHd4TtSnHukkckqJ24TzwkDiujeOK+gDyFN3mDoyP3QEgETzytTa67JbXftPm3KhsvRxsPckeE7VBSRj0ykcVz/fuyHUN31fanrgFOeyw5BekJZCUvFbhO3IHH+sP0TXbBSCMEZrAqEyo5KE/asL6VGrWZWe2XM4KzUq1SgHNYecfMQuO+zzsMuL1hYsOoY6H7aiTIEpt9nCpA7zKHARyPcBGPJVdJS+zm23G1JiTYzTyQAdq0AjI88fjVzajNNctoANZ8DypQo0rYEUWxuMn1JSvWqXLy+ocrmST+THb1azl3toBAlNNNupAOTsKvPPGRszxn9GBnBUFXq59iVrmWduIhBjPMkLjSGfC5HcHurQfUZ+vQ8VuHA9KMVm3cmOeVhk49FVNKabfttsiIuzrcme20lL77bXdpccA5UE+WTnirYkbRigV9oTKhfBUCZFLrqFgE7c9KYUUBhSosFj2doJ9KlUUVByiS3OAsy2ZbTYcU1uwnOM5SU/TrVWb0pHZcC2rUgpKFIUlx9S1c4wUqPKCOeR61sPGa+bR6VkDyAqlsqnN2Z9dxjT1MgKisdw2grKjt2qHKjyT4jWOHaLja2oDFuDbTEUlSkFCVd6SeeSMjPTirrgelGB6VG9Nqosex+zrhKatjQeg7xEcLqiGgpRPu9DjOK9xbC40YC5kNqXLgjEeQtagUjORkeeDV32j0owPSp3lNqqbGn3WDJdQpXfSWltqWlRSQVEHIP0qM1ptUNExDzapqZYQHC48QrwnI561dq+YFN5TaFR0WQoS22u2odZZkiSwkvKy2vA8/McUMWW4srZcQdqkyXpDqQfA93p8SVJ9PnmrxtHpRgelN5TaqCnTK2ofskaKllhMeWwhIWfCl8gny8sVJVbbk461IW22ZzUMxUyFeLqQSopIxk4/nV1wPSjA9KbyU2qkqtM1zuzNYakkxTFkcbA63uykYSBt28gY9fKsa7A73T6IcRqIlxltpPd9U7F7gok+8cjzq9YHpRgelN5TaqHK0+5JTcFNQGY0y4tlqVISpRK0n3sDoM4rPKtU6Um5sSWUvRJ7qHFMqX7hG3IBx0OwVddo9KMD0pvTaqVJt1zmCWmalt9h5xDiGwhKO6KVAp8QGT0A5qSbUqUXl+y+zuurK1qDpVnPw8qtmB6UbR6U39khUmXZXXCHGITaZiYfsiZJcJIbwRwnoDzXxnT4dU0XoO15phDAdD6sYSMDw9Ku+0elG0elN5TaFS3bGtplLBjKfQmSJKSmQtrCgAP2eo4rA7YnZgWm8QGJyFSVSG07iju1K6jI6j/ACave0elG0elN5TaFR1Wh+SiQm6REyy/KMnIdKNp2BAHHkAmsjdjfbnwZbTCQIjKmA2VEhbZzwfv+FXTaPSjA9Kbym1UdqwPtyJT8hhMhUmYiUoKVgBSMlI8+OR9qnQrdcHEqRdFIfJe75Cg2lBQfPhI56+dWrA9KMCo3ptWoO2fS/8ASOw+xOpy0tSSvkjoQfL5VxHrDs+uFjuTioLC5Ce8cKO5bWvaArgdPjX6YyobMxGx9IWKTr0fa1KOYyCflXwso1qeoNu2ViBt2lkSHCTM/Pt0W8t9TZT0+pp9ekKlN5JziDAEj1wPfwvz207d9dtsM2+3qvDCGyEISppQSM+hI4FTl6i7QUOKbU9eN6SRtDBPI+ld/N6TtjZO2OgfQV6GlbbvC/Z0bhz7ta+70LS7qs6q2kGz6A+/6rlxRuWgBtdwA9Tx81Vex6LKY0nb13ALEhxhC3d4wrcRk59DzzWx/KsMeM3GQENJCUj0rNW6wIAX2AECCV9oooqVZFFFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURFFFFERRRRREUUUURf/Z';
    
var dd = {
    unbreakable: true,
    pageSize: 'letter',
    style: 'tableExample',
    pageOrientation: 'portrait',
    fontSize: 9,
    pageMargins: [40,20],
    footer: function(currentPage, pageCount) {
        return [{text:"Pagina: "+currentPage+" de "+pageCount,alignment:"right",fontSize:7,marginRight:15}];
    },
    content: [
        {
            margin:[0,0],
            table: {
                widths: [70,'*',90,80],
                body:[
                    [
                        {
                            image: logo,
                            alignment: 'right',
                            width: 55,
                            height:30,
                            fontSize: 6,
                            margin: [10,15,0,0],
                            border:[true,true,false,false],
                            rowSpan:2,
                        },  
                        {text: "Instituto Nacional de Imnovación agropecuaria y forestal - INIAF",fontSize: 8,alignment: 'center',margin: [0,5,0,5],border:[false,true,false,false],colSpan:2},
                        '',
                        {
                            image: esfm,
                            alignment: 'right',
                            width: 30,
                            height:30,
                            fontSize: 6,
                            margin: [25,15,0,0],
                            border:[false,true,true,false],
                            rowSpan:2,
                        }
                    ],
                    [
                        '',
                        {text: "FORMULARIO No. 15\nSOLICITUD DE VIAJE, USO DE VEHICULO, COMBUSTIBLE Y ASIGNACION DE RECURSOS\nNI/VJUINIAF/DEP-PIN 2018/2019",bold: true,border:[false,false],fontSize: 9,alignment: 'center',colSpan:2},
                        '',''
                    ],
                    [
                        {text: "",border:[true,false,false,true],colSpan:2},'',
                        {text: "FECHA DE SOLICITUD",bold: true,fontSize: 9,alignment: 'center'},
                        ''
                    ],
                ],
                
            }
        },
        {
            style: 'tableExample',
            table: {
                widths: [150,'*'],
                "dontBreakRows": true,
                headerRows: 1,
                body:[
                    [
                        {text: "PARTE I. DATOS GENERALES",colSpan:2, style: 'tableHeader'},
                        ''
                    ],
                    [
                        {text: "Nombre y Apellido del funcionario", style: 'tablebody',
                            border: [true, true, false, true],
                        },
                        {text: "betanzosdeewewe",style: 'tablebody',
                            border: [false, true, true, true],
                        },
                    ],
                    [
                        {text: "Cargo",style: 'tablebody',
                            border: [true, true, false, true]
                        },
                        {text: "smknj", style: 'tablebody',
                            border: [false, true, true, true]
                        },
                    ],
                    [
                        {text: "Descripcion de la actividad",style: 'tablebody',
                            border: [true, true, false, true]
                        },
                        {text: "smknj", style: 'tablebody',
                            border: [false, true, true, true]
                        },
                    ],
                ]
            }
        },
        {
            style: 'tableExample',
            table: {
                widths: ['*',35,100,150,100],
                "dontBreakRows": true,
                headerRows: 1,
                body:[
                    [
                        {text: "PARTE II. SOLICITUD DE VIATICOS, VEHICULO Y COMBUSTIBLE",colSpan:5, style: 'tableHeader'},
                        '','','',''
                    ],
                    [
                        {text: "Descripcion del lugar de viaje:", style: 'tablebody'},
                        {colSpan:4, text: "betanzosdeewewe",style: 'tablebody'},'','','',
                    ],
                    [
                        {colSpan: 2,text: "Fecha de salida",style: 'tablebody'},'',
                        {text: "smknj", style: 'tablebodycenter'},
                        {text: "Tipo de Vehiculo", style: 'tablebody'},
                        {text: "unidad", style: 'tablebodycenter'},
                    ],
                    [
                        {colSpan: 2,text: "Hora de salida",style: 'tablebody'},'',
                        {text: "smknj", style: 'tablebodycenter'},
                        {text: "No. De Placa", style: 'tablebody'},
                        {text: "unidad", style: 'tablebodycenter'},
                    ],
                    [
                        {colSpan: 2,text: "Fecha de Retorno",style: 'tablebody'},'',
                        {text: "smknj", style: 'tablebodycenter'},
                        {text: "Rendimiento Km/1 Lts.", style: 'tablebody'},
                        {text: "unidad", style: 'tablebodycenter'},
                    ],
                    [
                        {colSpan: 2,text: "Hora de Retorno (aproximado)",style: 'tablebody'},'',
                        {text: "smknj", style: 'tablebodycenter'},
                        {text: "Kilometraje inicial", style: 'tablebody'},
                        {text: "unidad", style: 'tablebodycenter'},
                    ],
                    [
                        {colSpan: 2,text: "Solicitud de Resolución Administrativa (dia)",style: 'tablebody'},'',
                        {text: "smknj", style: 'tablebodycenter'},
                        {text: "Combustible inicial (aproximado)", style: 'tablebody'},
                        {text: "unidad", style: 'tablebodycenter'},
                    ],
                    [
                        {colSpan: 2,text: "Pasajes Terrestres (Si corresponde)",style: 'tablebody'},'',
                        {text: "smknj", style: 'tablebodycenter'},
                        {text: "Kilometraje aproximado del viaje", style: 'tablebody'},
                        {text: "unidad", style: 'tablebodycenter'},
                    ],
                    [
                        {text: "PARTE II. SOLICITUD DE VIATICOS, VEHICULO Y COMBUSTIBLE",colSpan:5, style: 'tablebodycenter'},
                        '','','',''
                    ],
                ]
            }
        },
        {
            style: 'tableExample',
            table: {
                widths: ['*',35,40, 40,40,50],
                "dontBreakRows": true,
                headerRows: 1,
                body:[
                    [
                        {text: "PARTE III. REQUERIMIENTO DE RECURSO",colSpan:6, style: 'tableHeader'},
                        '','','','','',
                    ],
                    [
                        {text: "Descripcion de Gastos", style: 'tableHeadercenter'},
                        {text: "Efectivo / Vales", style: 'tableHeadercenter'},
                        {text: "Cantidad", style: 'tableHeadercenter'},
                        {text: "unidad", style: 'tableHeadercenter'},
                        {text: "P/U.", style: 'tableHeadercenter'},
                        {text: "Total", style: 'tableHeadercenter'},
                    ],
                    [
                        {text: "gdfgdf", style: 'tablebody'},
                        {text: "", style: 'tablebody'},
                        {text: "Cantidad", style: 'tablebodycenter'},
                        {text: "unidad", style: 'tablebodycenter'},
                        {text: "P/U.", style: 'tablebodycenter'},
                        {text: "Total", style: 'tablebodycenter'},
                    ],
                    [
                        {text: "TOTAL REQUERIMIENTO",colSpan:5, style: 'tablebodycenter'},
                        '','','','',{text: "324324", style: 'tablebody'},
                    ],
                    [
                        {text: "OBSERVACIONES:",colSpan:6, style: 'tablebody'},
                        '','','','','',
                    ],
                    [
                        {text: "Adjunto: Memorandum\nResolucion Administrativa si corresponde:\n\n\n\n\n\n",colSpan:6, style: 'tablebody',border:[true,true,true,false]},
                        '','','','','',
                    ],
                    [
                        {text: "_______________________________________________\nFUNCIONARIO",colSpan:2,margin:[0,0,90,0],style: 'tablebodycenter',border:[true,false,false,true]},
                        '',{text: "_______________________________________________\nAUTORIZA - ENLACE\nMACROREGIONALPOTOSI - INIAF",border:[false,false,true,true],colSpan:4,margin:[0,0,30,0], style: 'tablebodycenter',border:[false,false,true,true]},'','','',
                    ],
                ],
            }
        },
        {
            style: 'tableExample',
            table: {
                widths: [25,'*',35,35, 40,52,50,45],
                "dontBreakRows": true,
                headerRows: 1,
                body:[
                    [
                        {text: "SOLICITUD DE VIATICOS, VEHICULO Y COMBUSTIBLE",colSpan:8, style: 'tableHeader'},
                        '','','','','','',''
                    ],
                    [
                    {text: "Partida Pptaria", style: 'tableHeadercenter'},
                    {text: "Descripcion del Gasto", style: 'tableHeadercenter'},
                    {text: "UNIDAD", style: 'tableHeadercenter'},
                    {text: "Cantidad", style: 'tableHeadercenter'},
                    {text: "Precio Unitario", style: 'tableHeadercenter'},
                    {text: "Total Requerimiento", style: 'tableHeadercenter'},
                    {text: "Retenciones Impositivas", style: 'tableHeadercenter'},
                    {text: "Liquido Pagable", style: 'tableHeadercenter'}],
                    [
                        {text: "TOTAL GENERAL",colSpan:5, style: 'tablebodycenter'},'','','','',
                        {text: "324324", style: 'tablebody'},
                        {text: "324324", style: 'tablebody'},
                        {text: "324324", style: 'tablebody'},
                    ],
                    [
                        {text: ".",colSpan:8, style: 'tablebody',color:"#fff"},
                        '','','','','','',''
                    ],
                    [
                        {text: "Numeros de Vales Gasolina(10 Lts.)",colSpan:2, style: 'tablebodycenter'},'',
                        {text: "324324", style: 'tablebody'},
                        {text: "Numero de Memorandum", colSpan:3,style: 'tablebody'},'','',
                        {text: "324324",colSpan:2,style: 'tablebody'},''
                    ],
                    [
                        {text: "Numeros de Vales Gasolina(20 Lts.)",colSpan:2, style: 'tablebodycenter'},'',
                        {text: "324324", style: 'tablebody'},
                        {text: "Numero de Resolución Adminstrativa", colSpan:3,style: 'tablebody'},'','',
                        {text: "324324",colSpan:2,style: 'tablebody'},''
                    ],
                    [
                        {text:"Lugar y Fecha",colSpan:8, style: 'tablebody'},
                        '','','','','','',''
                    ],
                ],
                
            }
        },
        {
            style: 'tableExample',
            table: {
                widths: [175,'*',175],
                "dontBreakRows": true,
                headerRows: 1,
                body:[
                    [
                        {text: "|\n|\n|\n|\n|", color: 'white'},
                        {text: ""},
                        {text: ""}
                    ],
                    [
                        {text: "ELABORADO POR:", style: 'tableHeadercenter'},
                        {text: "Vo.Bo.", style: 'tableHeadercenter'},
                        {text: "RECIBI CONFORME", style: 'tableHeadercenter'}
                    ],
                    [
                        {text: "Adjunto Memorandum, Certificacion Presupuestaria y Resolución Administrativa para fin de semana si corresponde",colSpan:3,style: 'tablebody'},'','',
                    ],
                ],
                
            }
        },
    ],
    styles:styles
};