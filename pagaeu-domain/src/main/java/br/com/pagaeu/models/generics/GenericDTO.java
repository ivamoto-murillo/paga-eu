package br.com.pagaeu.models.generics;

import java.io.Serializable;

import javax.persistence.Entity;

@Entity
public class GenericDTO implements Serializable {
	
	private static final long serialVersionUID = 7290604478441983701L;

	public Serializable getKey() {
		return null;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (obj instanceof GenericDTO) {
			GenericDTO gDTO = (GenericDTO) obj;
			
			if (this.getKey().equals(gDTO.getKey())) {
				return true;
			} else {
				return super.equals(obj);
			}
		} else {
			return false;
		}
	}
	
}
