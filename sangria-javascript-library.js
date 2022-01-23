/**
 * 샹그리아 라이브러리 for javascript
 */
class SangriaJavascriptLibrary {
	version = '1.0.0';

	constructor(){
		// let _this = this;
	}

	/**
	 * 전체 체크버튼이 활성화 상태에 따른 기본 체크박스 전체 선택
	 * @param all_selector 전체 체크박스 셀렉터
	 * @param check_selector 체크박스 셀렉터
	 */
	checkAllToggle(all_selector, check_selector){
		let el_all_check = document.querySelector(all_selector);
		let el_check_all = document.querySelectorAll(check_selector);
		let is_check = el_all_check.checked;

		if( is_check === true ){
			el_check_all.forEach((checkbox) => {
				if( checkbox.disabled !== true ){
					checkbox.setAttribute('checked', 'checked');
					checkbox.checked = true;
				}
			})
		} else {
			el_check_all.forEach((checkbox) => {
				checkbox.removeAttribute('checked', 'checked');
				checkbox.checked = false;
			})
		}
	}

	/**
	 * 체크박스 선택수에 따라 전체 선택 체크 활성/비활성
	 * @param all_selector 전체 체크박스 셀렉터
	 * @param check_selector 체크박스 셀렉터
	 */
	checkBoxToggle(all_selector, check_selector){
		let el_all_check = document.querySelector(all_selector);
		let checkbox_ln = document.querySelectorAll(check_selector+':enabled').length;
		let check_ln = document.querySelectorAll(check_selector+':checked:enabled').length;
		if( checkbox_ln === check_ln ){
			el_all_check.setAttribute('checked', 'checked');
			el_all_check.checked = true;
		} else {
			el_all_check.removeAttribute('checked', 'checked');
			el_all_check.checked = false;
		}
	}

	/**
	 * 이벤트 기록
	 */
	check_event_instance = {};

	/**
	 * 체크박스 토글 이벤트
	 * @param all_selector 전체 체크박스 셀렉터
	 * @param check_selector 체크박스 셀렉터
	 */
	checkBoxToggleEvent(all_selector, check_selector){
		let _this = this;
		let regType = /[^0-9a-zA-Z]/g;
		let all_event_name = all_selector.replace(regType, "");
		let check_event_name = check_selector.replace(regType, "");

		// 체크박스(전체) 변경시
		let el_all_check = document.querySelector(all_selector);
		// 이벤트가 존재하면 삭제 (메모리 관리)
		if( typeof _this.check_event_instance[all_event_name] !== 'undefined' ){
			el_all_check.removeEventListener('change', _this.check_event_instance[all_event_name]);
		}
		// 신규 이벤트
		_this.check_event_instance[all_event_name] = function(){
			_this.checkAllToggle(all_selector, check_selector);
		}
		el_all_check.addEventListener('change', _this.check_event_instance[all_event_name]);

		// 체크박스(기본) 변경시
		let el_check_all = document.querySelectorAll(check_selector);
		el_check_all.forEach((el_check, idx) => {
			let chk_name = check_event_name+idx;
			_this.check_event_instance[chk_name] = function(){
				_this.checkBoxToggle(all_selector, check_selector);
			}
			if( typeof _this.check_event_instance[chk_name] !== 'undefined' ){
				el_check.removeEventListener('change', _this.check_event_instance[chk_name]);
			}
			el_check.addEventListener('change', _this.check_event_instance[chk_name]);
		})
	}
}