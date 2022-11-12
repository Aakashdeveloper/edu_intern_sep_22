localStorage
> Presistent Storage
> It save wrt to browser
> We have to remove it manully

localStorage.setItem('username','testuser')
undefined
localStorage.setItem('usertoken','erej43534jtbjb4t')
undefined
localStorage.getItem('username')
'testuser'
localStorage.getItem('usertoken')
'erej43534jtbjb4t'
localStorage.getItem('usertoken1')
null
localStorage.removeItem('username')
undefined
localStorage.getItem('username')
null
localStorage.getItem('usertoken')
'erej43534jtbjb4t'

sessionStorage
> Temp Storage
> Save wrt to website
> Remove as soon as close the tab

sessionStorage.setItem('city','Delhi')
undefined
sessionStorage.getItem('city')
'Delhi'
sessionStorage.removeItem('city')
undefined
sessionStorage.getItem('city')
null
sessionStorage.setItem('city','Delhi')
undefined

Cookies
document.cookie
'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.614572059.1668231666; _gat_gtag_UA_131256843_1=1'
document.cookie="city=delhi; expires=Sun, 13 Nov 2022 12:00:00 UTC"

'_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.614572059.1668231666; city=delhi'