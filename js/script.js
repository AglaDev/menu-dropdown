
		window.onload = function(){
			
			let btnsSubmenu = document.querySelectorAll('.btn-submenu')
		
			getSubmenu(btnsSubmenu)
			
			function getSubmenu(btns){
		
				btns.forEach(function(btn){
		
					btn.addEventListener('click',function(){
		
						openSubmenu(this)
		
					})
				})
			}
		
			function openSubmenu(btn){
		
				let submenu = btn.nextElementSibling
				let alturaSubmenu = !!submenu.style.maxHeight
		
				if(alturaSubmenu){
		
					submenu.style.maxHeight = null
		
				}else{
					
					let submenus = document.querySelectorAll('.sub-menu')
					submenus.forEach(function(sub){
						let alturaSub = sub.style.maxHeight
						if(alturaSub){
							sub.style.maxHeight = null
						}
					})
		
					submenu.style.maxHeight = submenu.scrollHeight+'px'
				}
		
			}
		}